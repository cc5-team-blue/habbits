import React, { Component } from 'react';
import { StyleSheet, View, StatusBar, ActivityIndicator } from 'react-native';
import { connect } from 'react-redux';

import { saveTimesToStore } from '../../../actions';
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

class MainScreen extends Component {
  componentDidMount = () => {
    const { uid, navigation } = this.props;
    const user = app.database().ref(`users/${uid}`);
    const earlyMorning = user.child('habits/early_morning');
    // if the time is correct
    // if (moment().hour() === 5 && (moment().minute() >= 45 && moment().minute() <= 59)) {
    // line 28 is for test purpose only.
    if (moment().hour() === 18 && (moment().minute() >= 1 && moment().minute() <= 59)) {
      earlyMorning.once('value', data => {
        const result = data.toJSON();
        const today = moment(Date.now()).format('DD/MM/YYYY');
        if (result.times < 5) {
          // if this is the first time or the button have not been clicked today
          if (result.clickDate === 0 || moment(result.clickDate).format('DD/MM/YYYY') !== today) {
            // go to Correct Time screen
            navigation.navigate('CorrectTime');
          } else {
            // go to Wrong Time screen
            navigation.navigate('WrongTime');
          }
        }
      });
      // if the time is wrong
    } else {
      earlyMorning.once('value', data => {
        const result = data.toJSON();
        const date = moment(result.clickDate);
        const now = moment(Date.now());
        const diff = moment.duration(now.diff(date));
        // if click times are less than 5
        if (result.times < 5) {
          // if a day did not pass without clicking
          if (date !== 0 && diff.days() >= 1) {
            // app
            earlyMorning
              .update({
                tutorial: true,
              })
              .then(() => navigation.navigate('Fail'));
          } else {
            // go to Wrong Time screen
            navigation.navigate('WrongTime');
          }
        }
      });
    }
  };

  render() {
    return (
      <View style={styles.container}>
        <StatusBar barStyle="light-content" />
        <ActivityIndicator size="large" />
      </View>
    );
  }
}

const mapStateToProps = state => ({
  uid: state.red.uid,
  times: state.red.earlyTimes,
  points: state.red.totalPoints,
});

const mapDispatchToProps = dispatch => ({
  updateClickTimes: clickTime => {
    dispatch(saveTimesToStore(clickTime));
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MainScreen);
