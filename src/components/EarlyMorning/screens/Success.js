import React, { Component } from 'react';
import { Text, View, Image, StatusBar } from 'react-native';
import { connect } from 'react-redux';
import { NavigateActions } from 'react-navigation';

import { app } from '../../../../db';
import happyRabbit from '../images/success.png';
import styles from '../styles/styleForSuccess';

class Success extends Component {
  constructor(props) {
    super(props);
    this.state = {
      times: 0,
    };
  }

  async componentDidMount() {
    const { uid } = this.props;
    const ref = `users/${uid}/habits/early_morning`;
    const earlyMorning = app.database().ref(ref);

    await earlyMorning.once('value', data => {
      const result = data.toJSON();
      this.setState({ times: result.times });
    });
  }

  goHome = () => {
    const { navigation } = this.props;
    navigation.navigate('Main');
  };

  render() {
    const { times } = this.state;

    return (
      <View style={styles.realContainer}>
        <StatusBar barStyle="light-content" />
        <View style={styles.container}>
          <View style={styles.yayImgContainer}>
            <View style={styles.awesomeWrapper}>
              <Text style={[styles.awesomeText, { textAlign: 'center' }]}>Success!</Text>
              <Text style={styles.amazingText}>Have an amazing day!</Text>
            </View>
            <Image style={styles.happyRabbitImage} source={happyRabbit} />
            <Text style={styles.pointsText}>Challenge Progress:</Text>
            <Text style={[styles.challengeText, { color: '#3b495b' }]}>
              {times}
              /5
            </Text>
          </View>
          <View onTouchStart={this.goHome} style={styles.yayButton}>
            <Text style={styles.yayText}>Yay!</Text>
          </View>
        </View>
      </View>
    );
  }
}

const mapStateToProps = state => ({
  uid: state.red.uid,
  points: state.red.totalPoints,
});

// const mapDispatchToProps = dispatch => ({
//   goHome: () => {
//     const { navigation } = this.props;
//     navigation.navigate('Main');
//   },
// });

export default connect(
  mapStateToProps,
  null
)(Success);
