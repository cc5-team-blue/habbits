import React, { Component } from 'react';
import { StyleSheet, Text, TextInput, View, Button } from 'react-native';

const moment = require('moment');

export default class Main extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    // {
    //   app
    //     .database()
    //     .ref('users/0/habits/early_morning/')
    //     .on('value', data => {
    //       const result = data.toJSON();
    //       if (result.active) {
    //         console.log('Active');
    //       } else {
    //         console.log('Not Active');
    //         this.props.navigation.navigate('Main');
    //       }
    //     });
    // }

    if (moment().hour() === 6 && (moment().minute() >= 45 && moment().minute() <= 59)) {
      console.log('true');
      return (
        <View style={styles.container}>
          <Text style={styles.text}>Main</Text>
          <Text style={styles.text}>true</Text>
        </View>
      );
    }
    console.log('false');
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Main</Text>
        <Text style={styles.text}>false</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 24,
  },
});
