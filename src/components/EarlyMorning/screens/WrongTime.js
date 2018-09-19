import React, { Component } from 'react';
import { Text, Image, View, StatusBar } from 'react-native';
import { app } from '../../../../db';
import styles from '../styles/styleForWrongTime';
import RabbitImg from '../images/rabbit.png';

export default class WrongTime extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: '0',
      active: false,
      times: 0,
    };
  }

  componentDidMount() {
    const db = app.database();
    const ref = db.ref('users');
    const user = ref.child(this.state.user);
    const habits = user.child('habits');
    const earlyMorning = habits.child('early_morning');
    // app
    //   .database()
    //   .ref(`users/${this.state.user}/habits/early_morning/`)
    earlyMorning.on('value', data => {
      const result = data.toJSON();
      this.setState({ active: result.active, times: result.times });
    });
  }

  componentWillUnmount() {
    this.setState({ user: 0, active: false, times: 0 });
  }

  handleClick = () => {
    console.log('Clicked');
  };

  render() {
    return (
      <View style={styles.container}>
        <StatusBar barStyle="light-content" />
        <View style={styles.headerWrapper}>
          <Text style={styles.header}>Early Start</Text>
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
