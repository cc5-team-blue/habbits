import React, { Component } from 'react';
import { Text, View, StatusBar, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { saveTimesToStore } from '../../../actions/index';
import { app } from '../../../../db';
import styles from '../styles/styleForCorrectTime';

class CorrectTime extends Component {
  async componentDidMount() {
    const { uid, updateClickTimes } = this.props;
    const db = app.database();
    const ref = db.ref('users');
    const user = ref.child(uid);
    const habits = user.child('habits');
    const earlyMorning = habits.child('early_morning');

    await earlyMorning.on('value', data => {
      const result = data.toJSON();
      updateClickTimes(result.times);
    });
  }

  handleClick = async () => {
    const { uid, times, updateClickTimes, navigation } = this.props;
    const earlyMorning = await app.database().ref(`users/${uid}/habits/early_morning`);
    await earlyMorning.update({ times: times + 1, clickDate: Date.now() });
    const newTimes = times + 1;
    updateClickTimes(newTimes);
    if (times === 4) {
      navigation.navigate('BigSuccess');
    } else {
      navigation.navigate('Success');
    }
  };

  render() {
    // correct time
    return (
      <View style={styles.container}>
        <StatusBar barStyle="light-content" translucent />
        <Text style={styles.header}>Early Start</Text>
        <View style={styles.wrapper}>
          <Text style={styles.text}>Good Morning Handsome!</Text>
          <View>
            <TouchableOpacity onPress={this.handleClick}>
              <View style={styles.img} />
            </TouchableOpacity>
          </View>
          <Text style={styles.text2}>PUSH ME</Text>
        </View>
      </View>
    );
  }
}

const mapStateToProps = state => ({
  uid: state.red.uid,
  times: state.red.earlyTimes,
});

const mapDispatchToProps = dispatch => ({
  updateClickTimes: clickTime => {
    dispatch(saveTimesToStore(clickTime));
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CorrectTime);
