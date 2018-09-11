import React, { Component } from 'react';
import { Text, View, Alert, AppState, NetInfo } from 'react-native';
import { connect } from 'react-redux';
import { NavigationActions } from 'react-navigation';
import moment from 'moment';

import {
  setOfflineCountdown,
  appStateChange,
  updateConnectivity,
  resetOfflineCountdown,
  setEndTime,
} from '../actions';
import styles from '../css/styleForOfflineCountdonw';
import { setEndTimer } from '../helper';


class OfflineCountdown extends Component {
  componentDidMount() {
    const { startCountdownTimer, offlineSeconds, goToOfflineRabbit, setTimerEnd } = this.props;
    if (offlineSeconds === 0) {
      // goToOfflineRabbit();
    }
    this.timerID = setInterval(startCountdownTimer, 1000);
    AppState.addEventListener('change', this.handleAppStateChange);
    NetInfo.isConnected.addEventListener('connectionChange', this.handleConnectivityChange);

    // Set Timer end time to current time + 30sec for MVP.
    const endTime = moment().add(30, 'seconds');

    // Set Timer end time to state.endTime and set initial duration to state.full.
    setEndTimer(endTime);

    // Set Timer end time to Local Storage.
    setTimerEnd(endTime);
  }

  shouldComponentUpdate(nextProps) {
    const { goToOfflineRabbit } = this.props;
    if (nextProps.offlineSeconds === 0) {
      goToOfflineRabbit();
    }
    return true;
  }

  componentWillUnmount() {
    const { resetInterval } = this.props;
    clearInterval(this.timerID);
    resetInterval();
    AppState.removeEventListener('change', this.handleAppStateChange);
    NetInfo.isConnected.removeEventListener('connectionChange', this.handleConnectivityChange);
  }

  handleAppStateChange = nextAppState => {
    const { appState, updateAppState } = this.props;
    if (appState.match(/inactive|background/) && nextAppState === 'active') {
      console.log('App has come to the foreground!');
    }
    updateAppState(nextAppState);
  };

  handleConnectivityChange = isConnected => {
    const { updateConnect } = this.props;
    if (isConnected) {
      updateConnect(isConnected);
    } else {
      updateConnect(isConnected);
    }
  };

  render() {
    const { offlineSeconds, isConnected, clickHabbit, goToSleepTimer } = this.props;
    if (isConnected === false) {
      goToSleepTimer();
    }
    return (
      <View style={styles.container}>
        <Text style={styles.headline}>Sleep Timer</Text>
        <View style={styles.rectangleContainer}>
          <Text style={styles.seconds}>{offlineSeconds}s</Text>
          <Text style={styles.toGoOffline}>to go offline</Text>
          <Text style={styles.enterFlightMode}>Enter airplane mode and turn off WIFI</Text>
        </View>
        <Text />
      </View>
    );
  }
}

const mapStateToProps = state => ({
  offlineSeconds: state.red.offlineSeconds,
  appState: state.red.appState,
  isConnected: state.red.isConnected,
});

const mapDispatchToProps = dispatch => ({
  startCountdownTimer: () => {
    dispatch(setOfflineCountdown());
  },
  updateAppState: nextAppState => {
    dispatch(appStateChange(nextAppState));
  },
  updateConnect: newConnectionState => {
    dispatch(updateConnectivity(newConnectionState));
  },
  goToOfflineRabbit: () => {
    dispatch(NavigationActions.navigate({ routeName: 'OffLineRabbit' }));
  },
  goToSleepTimer: () => {
    dispatch(NavigationActions.navigate({ routeName: 'SleepTimer' }));
  },
  resetInterval: () => {
    dispatch(resetOfflineCountdown());
  },
  setTimerEnd: time => {
    dispatch(setEndTime(time));
  },
  clickHabbit: () => {
    Alert.alert(
      'Are you OK to give up?',
      'No points, No life',
      [
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        {
          text: 'OK',
          onPress: () => dispatch(NavigationActions.navigate({ routeName: 'Home' })),
        },
      ],
      { cancelable: true }
    );
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(OfflineCountdown);
