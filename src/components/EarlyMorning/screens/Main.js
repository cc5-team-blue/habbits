import React, { Component } from 'react';
import { StyleSheet, View, StatusBar, ActivityIndicator } from 'react-native';
import { app } from '../../../../db';

const moment = require('moment');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#39485C',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default class Main extends Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    // if the time is correct
    if (moment().hour() === 5 && (moment().minute() >= 45 && moment().minute() <= 59)) {
      app
        .database()
        .ref(`users/0/habits/early_morning/`)
        .on('value', data => {
          const result = data.toJSON();
          const today = moment(Date.now()).format('DD/MM/YYYY');
          if (result.times < 5) {
            // if this is the first time or the button have not been clicked today
            if (result.clickDate === 0 || moment(result.clickDate).format('DD/MM/YYYY') !== today) {
              this.props.navigation.navigate('CorrectTime');
            } else {
              this.props.navigation.navigate('WrongTime');
            }
          } else {
            this.props.navigation.navigate('BigSuccess');
          }
        });
      // else if the time is wrong
    } else {
      app
        .database()
        .ref(`users/0/habits/early_morning/`)
        .on('value', data => {
          const result = data.toJSON();
          const date = result.clickDate !== 0 ? moment(result.clickDate) : 0;
          const now = moment(Date.now());
          const diff = moment.duration(now.diff(date));
          if (result.times < 5) {
            if (date !== 0 && diff.days() >= 1) {
              app
                .database()
                .ref(`users/0/habits/early_morning/`)
                .update({ times: 0, startDate: '', clickDate: 0, active: false, tutorial: true });
              this.props.navigation.navigate('Fail');
            } else {
              this.props.navigation.navigate('WrongTime');
            }
          } else {
            this.props.navigation.navigate('BigSuccess');
          }
        });
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <StatusBar barStyle="light-content" />
        <ActivityIndicator size="large" />
      </View>
    );
  }
}
