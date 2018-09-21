import React, { Component } from 'react';
import { StyleSheet, View, StatusBar, ActivityIndicator } from 'react-native';
import { connect } from 'react-redux';
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
  constructor(props) {
    super(props);
  }

  componentDidMount = () => {
    const db = app.database();
    const ref = db.ref('users');
    const { uid } = this.props;
    const user = ref.child(uid);
    const achievements = user.child('achievements');
    const habits = user.child('habits');
    const earlyMorning = habits.child('early_morning');

    // if the time is correct
    if (moment().hour() === 5 && (moment().minute() >= 45 && moment().minute() <= 59)) {
      // app.database().ref(`users/0/habits/early_morning/`);
      earlyMorning.on('value', data => {
        const result = data.toJSON();
        const today = moment(Date.now()).format('DD/MM/YYYY');
        if (result.times < 5) {
          // if this is the first time or the button have not been clicked today
          if (result.clickDate === 0 || moment(result.clickDate).format('DD/MM/YYYY') !== today) {
            // go to Correct Time screen
            this.props.navigation.navigate('CorrectTime');
          } else {
            // go to Wrong Time screen
            this.props.navigation.navigate('WrongTime');
          }
        } else {
          // add 300 points
          achievements
            .push({ type: 'plus', date: Date.now(), points: 300 })
            .then(() => {
              // go to Big Success screen
              this.props.navigation.navigate('BigSuccess');
            })
            .catch(error => {
              console.log(error);
            });
        }
      });
      // else if the time is wrong
    } else {
      earlyMorning.on('value', data => {
        const result = data.toJSON();
        const date = result.clickDate !== 0 ? moment(result.clickDate) : 0;
        const now = moment(Date.now());
        const diff = moment.duration(now.diff(date));
        // if click times are less than 5
        if (result.times < 5) {
          // if a day did not pass without clicking
          if (date !== 0 && diff.days() >= 1) {
            // app
            earlyMorning.update({
              times: 0,
              startDate: '',
              clickDate: 0,
              tutorial: true,
            });

            // remove 100 points
            achievements
              .push({ type: 'minus', date: Date.now(), points: 100 })
              .then(() => {
                // go to Fail screen
                this.props.navigation.navigate('Fail');
              })
              .catch(error => {
                console.log(error);
              });
          } else {
            // go to Wrong Time screen
            this.props.navigation.navigate('WrongTime');
          }
        } else {
          // add 300 points
          achievements
            .push({ type: 'plus', date: Date.now(), points: 300 })
            .then(() => {
              // go to Big Success screen
              this.props.navigation.navigate('BigSuccess');
            })
            .catch(error => {
              console.log(error);
            });
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
});

export default connect(
  mapStateToProps,
  null
)(MainScreen);
