import React, { Component } from 'react';
import { Text, Image, View, StatusBar, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { connect } from 'react-redux';
import { app } from '../../../../db';

import Exit from '../../ExitButton';
import styles from '../styles/styleForWrongTime';
import RabbitImg from '../images/rabbit.png';

class WrongTime extends Component {
  constructor(props) {
    super(props);
    this.state = {
      uid: this.props.uid,
      times: 0,
    };
  }

  componentWillMount() {}

  componentDidMount() {
    const db = app.database();
    const ref = db.ref('users');
    const user = ref.child(this.state.uid);
    const habits = user.child('habits');
    const earlyMorning = habits.child('early_morning');
    earlyMorning.on('value', data => {
      const result = data.toJSON();
      this.setState({ times: result.times });
    });
  }

  componentWillUnmount() {
    this.setState({ times: 0 });
  }

  handleClick = () => {
    this.props.navigation.navigate('Main');
  };

  render() {
    return (
      <View style={styles.container}>
        <StatusBar barStyle="light-content" />
        <View style={styles.headlineWrapper}>
          <Text style={styles.header}>Early Start</Text>
          <Exit />
        </View>
        <View style={styles.wrapper}>
          <View style={styles.center}>
            <Text style={styles.headlineText}>Come Back between 5:45 and 6:00 am</Text>
          </View>
          <View style={styles.imageWrapper}>
            <Image source={RabbitImg} style={styles.img} />
          </View>
          <View style={styles.center}>
            <Text style={styles.challengeText}>Challenge Progress</Text>
            <Text style={styles.pointText}>
              {this.state.times}
              /5
            </Text>
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
)(WrongTime);
