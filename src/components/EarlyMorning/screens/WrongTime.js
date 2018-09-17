import React, { Component } from 'react';
import { Text, Image, View, StatusBar, TouchableOpacity } from 'react-native';
import { app } from '../../../../db';
import styles from '../styles/styleForWrongTime';
import RabbitImg from '../images/rabbit.png';

export default class WrongTime extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userID: 0,
      active: false,
      times: 0,
    };
  }

  componentDidMount() {
    app
      .database()
      .ref(`users/${this.state.userID}/habits/early_morning/`)
      .on('value', data => {
        const result = data.toJSON();
        this.setState({ active: result.active, times: result.times });
      });
  }

  componentWillUnmount() {
    this.setState({ userID: 0, active: false, times: 0 });
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
            <Text style={styles.pointText}>{this.state.times} / 5</Text>
          </View>
        </View>
      </View>
    );
  }
}
