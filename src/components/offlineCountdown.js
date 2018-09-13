import React, { Component } from 'react';
import { Text, View, AppState, NetInfo } from 'react-native';
import { connect } from 'react-redux';
import { NavigationActions, StackActions } from 'react-navigation';
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
    const {
      startCountdownTimer,
      offlineSeconds,
      goToOfflineRabbit,
      setTimerEnd,
      goToSleepTimer,
      isConnected,
    } = this.props;
    if (offlineSeconds === 0) {
      goToOfflineRabbit();
    }
    if (isConnected === false) {
      goToSleepTimer();
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
    const { goToOfflineRabbit, isConnected, goToSleepTimer } = this.props;
    if (nextProps.offlineSeconds === 0) {
      goToOfflineRabbit();
      return false;
    }
    if (isConnected === false) {
      goToSleepTimer();
      return false;
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
    const { offlineSeconds } = this.props;
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
  // state: state.nav,
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
    // dispatch(NavigationActions.navigate({ routeName: 'OffLineRabbit' }));
    dispatch(StackActions.push({ routeName: 'OffLineRabbit' }));
  },
  goToSleepTimer: () => {
    // dispatch(NavigationActions.navigate({ routeName: 'SleepTimer' }));
    dispatch(StackActions.replace({ routeName: 'SleepTimer' }));
  },
  resetInterval: () => {
    dispatch(resetOfflineCountdown());
  },
  setTimerEnd: time => {
    dispatch(setEndTime(time));
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(OfflineCountdown);
