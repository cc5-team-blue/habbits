import React from 'react';
import { Text, View, Image, StatusBar } from 'react-native';
import { connect } from 'react-redux';
import { NavigationActions, StackActions } from 'react-navigation';
import sleepHabbitImg from '../images/rabbitSmall.png';
import analyticsImage from '../images/analyticsImage.png';
import styles from '../css/styleForSampleComponent';
import Drawer from './Drawer';

export const SampleComponent = ({ clickHabbit, goToAnalytics }) => (
  <View style={styles.container}>
    <StatusBar barStyle="light-content" />
    <Drawer />
    <Text style={styles.headline}>Good Evening {'Habbits'}</Text>{' '}
    <View style={styles.wrapper}>
      <View onTouchStart={clickHabbit} style={styles.sleepHabbit}>
        <Image style={styles.habbitImage} source={sleepHabbitImg} />{' '}
      </View>{' '}
      <View onTouchStart={clickHabbit} style={styles.sleepHabbitTextBar}>
        <Text style={styles.sleepHabbitText}>Sleep Habbit</Text>{' '}
      </View>{' '}
      <View onTouchStart={goToAnalytics} style={styles.analytics}>
        <Image style={styles.analyticsImage} source={analyticsImage} />{' '}
        <View flex bottom style={styles.textBox}>
          <Text style={styles.analyticsText}>Analytics</Text>{' '}
        </View>
      </View>{' '}
      <View style={styles.achievements}>
        <Text style={styles.achievementsText}>Recent Achievements</Text>
        <View style={styles.achievementsIconContainer}>
          <View style={styles.achievementsIconLeft}>1</View>
          <View style={styles.achievementsIconMiddle}>2</View>
          <View style={styles.achievementsIconMiddle}>3</View>
          <View style={styles.achievementsIconRight}>4</View>
        </View>
      </View>
    </View>{' '}
  </View>
);

const mapStateToProps = state => ({
  state: state.nav,
});

const mapDispatchToProps = dispatch => ({
  clickHabbit: () => {
    // dispatch(NavigationActions.navigate({ routeName: 'OffLine' }));
    dispatch(StackActions.push({ routeName: 'OffLine' }));
  },
  goToAnalytics: () => {
    // dispatch(NavigationActions.navigate({ routeName: 'Analytics' }));
    dispatch(StackActions.push({ routeName: 'Analytics' }));
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SampleComponent);
