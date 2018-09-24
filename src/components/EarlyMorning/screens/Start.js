import React, { Component } from 'react';
import { Text, StatusBar, View, Image } from 'react-native';
import { connect } from 'react-redux';
import { app } from '../../../../db';
import { saveTimesToStore } from '../../../actions/index';
import Exit from '../../ExitButton';
import coffeeImg from '../images/coffee.png';
import styles from '../styles/styleForStart';

class Start extends Component {
  handleClick = () => {
    const db = app.database();
    const ref = db.ref('users');
    const { uid, updateClickTimes, navigation } = this.props;
    const user = ref.child(uid);
    const habits = user.child('habits');
    const earlyMorning = habits.child('early_morning');

    const initClickDate = new Date();
    initClickDate.setDate(initClickDate.getDate());
    initClickDate.setHours(5);
    initClickDate.setMinutes(50);
    initClickDate.setMilliseconds(0);

    updateClickTimes(0);
    earlyMorning
      .update({
        tutorial: false,
        startDate: Date.now(),
        clickDate: Date.parse(initClickDate),
        times: 0,
      })
      .then(navigation.navigate('MainScreen'));
  };

  render() {
    return (
      <View style={styles.container}>
        <StatusBar barStyle="light-content" translucent />
        <View style={styles.headlineWrapper}>
          <Text style={styles.header}>Early Start</Text>
          <Exit />
        </View>
        <View style={styles.wrapper}>
          <Image source={coffeeImg} style={styles.img} />
          <Text style={styles.title}>Description:</Text>
          <Text style={styles.text}>This modules helps you build an early morning habbit.</Text>
          <Text style={styles.title2}>Challenge:</Text>
          <Text style={styles.text2}>
            - 5-day challenge
            {'\n'}- Wake up before 6am
            {'\n'}- Don’t miss a single morning
            {'\n'}
            {'\n'}
          </Text>
        </View>
        <View style={styles.btnWrapper}>
          <Text onPress={this.handleClick} style={styles.btn}>
            Bring it on
          </Text>
        </View>
      </View>
    );
  }
}

const mapStateToProps = state => ({
  uid: state.red.uid,
});

const mapDispatchToProps = dispatch => ({
  updateClickTimes: clickTime => {
    dispatch(saveTimesToStore(clickTime));
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Start);
