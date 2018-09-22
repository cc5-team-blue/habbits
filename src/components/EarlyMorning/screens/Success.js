import React, { Component } from 'react';
import { Text, View, Image, StatusBar } from 'react-native';
import { connect } from 'react-redux';
import { app } from '../../../../db';
import happyRabbit from '../images/success.png';
import styles from '../styles/styleForSuccess';

class Success extends Component {
  constructor(props) {
    super(props);
    this.state = {
      uid: this.props.uid,
      times: 0,
    };
  }

  async componentDidMount() {
    const db = app.database();
    const ref = db.ref('users');
    const user = ref.child(this.state.uid);
    const habits = user.child('habits');
    const earlyMorning = habits.child('early_morning');

    await earlyMorning.on('value', data => {
      const result = data.toJSON();
      this.setState({ times: result.times });
    });
  }

  handleClick = () => {
    this.props.navigation.navigate('Loading');
  };

  render() {
    return (
      <View style={styles.realContainer}>
        <StatusBar barStyle="light-content" translucent />
        <View style={styles.container}>
          <View style={styles.yayImgContainer}>
            <View style={styles.awesomeWrapper}>
              <Text style={[styles.awesomeText, { textAlign: 'center' }]}>Success!</Text>
              <Text style={styles.amazingText}>Have an amazing day!</Text>
            </View>
            <Image style={styles.happyRabbitImage} source={happyRabbit} />
            <Text style={styles.pointsText}>Challenge Progress:</Text>
            <Text style={[styles.challengeText, { color: '#3b495b' }]}>
              {this.state.times}
              /5
            </Text>
          </View>
          <View onTouchStart={this.handleClick} style={styles.yayButton}>
            <Text style={styles.yayText}>Yay!</Text>
          </View>
        </View>
      </View>
    );
  }
}

const mapStateToProps = state => ({
  uid: state.red.uid,
});

export default connect(
  mapStateToProps,
  null
)(Success);
