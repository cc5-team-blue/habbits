import React, { Component } from 'react';
import { Text, Image, View, StatusBar } from 'react-native';
import { connect } from 'react-redux';
import { saveTimesToStore } from '../../../actions/index';
import { app } from '../../../../db';
import Exit from '../../ExitButton';
import styles from '../styles/styleForWrongTime';
import RabbitImg from '../images/rabbit.png';

class WrongTime extends Component {
  componentDidMount() {
    const { uid, updateClickTimes } = this.props;
    const db = app.database();
    const ref = db.ref('users');
    const user = ref.child(uid);
    const habits = user.child('habits');
    const earlyMorning = habits.child('early_morning');
    earlyMorning.once('value', data => {
      const result = data.toJSON();
      updateClickTimes(result.times);
    });
  }

  render() {
    const { times } = this.props;
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
              {times}
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
)(WrongTime);
