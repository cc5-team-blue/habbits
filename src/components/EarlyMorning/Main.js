import React, { Component } from 'react';
import { StyleSheet, Text, TextInput, View, Button } from 'react-native';
import { app } from '../../../db';

const moment = require('moment');

export default class Main extends Component {
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

  render() {
    if (moment().hour() === 6 && (moment().minute() >= 45 && moment().minute() <= 59)) {
      return (
        <View style={styles.container}>
          <Text style={styles.text}>Main</Text>
          <Text style={styles.text}>true</Text>
          <Button title="push me" />
        </View>
      );
    }
    return (
      <View style={styles.container}>
        <Text style={styles.header}>Early Start</Text>
        <View style={styles.wrapper}>
          <Text style={styles.text}>Come Back between</Text>
          <Text style={styles.text}>5:45 and 6:00 am</Text>
          <Text style={styles.text}>Challenge Progress</Text>
          <Text style={styles.text}>{this.state.times} / 5</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#39485C',
    justifyContent: 'center',
    alignItems: 'center',
  },
  wrapper: {
    height: 527.5,
    width: 325,
    borderRadius: 10,
    backgroundColor: '#FFF8DC',
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    fontFamily: 'Futura-Bold',
    fontSize: 35,
    color: 'white',
  },
  text: {
    fontFamily: 'Futura-Bold',
    fontSize: 18,
    color: '#5A4A93',
  },
});
