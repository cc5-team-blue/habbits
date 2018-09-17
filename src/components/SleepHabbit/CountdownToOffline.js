import React, { Component } from 'react';
import { Text, View, NetInfo } from 'react-native';
import { connect } from 'react-redux';
import { NavigationActions } from 'react-navigation';
import moment from 'moment';

import {
  setOfflineCountdown,
  appStateChange,
  resetOfflineCountdown,
  setEndTime,
  updateConnectivity,
} from '../../actions';
import styles from '../../css/styleForOfflineCountdonw';
import { setEndTimer } from '../../helper';

class CountdownToOffline extends Component {
  componentDidMount() {
    const { startCountdownTimer, offlineSeconds, goToOfflineRabbit, setTimerEnd } = this.props;
    NetInfo.isConnected.addEventListener('connectionChange', this.handleConnectivityChange);

    if (offlineSeconds === 0) {
      goToOfflineRabbit();
    }
    this.timerID = setInterval(startCountdownTimer, 1000);

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
    if (nextProps.isConnected !== isConnected && isConnected === false) {
      goToSleepTimer();
      return false;
    }
    return true;
  }

  componentWillUnmount() {
    const { resetInterval } = this.props;
    clearInterval(this.timerID);
    resetInterval();
    NetInfo.isConnected.removeEventListener('connectionChange', this.handleConnectivityChange);
    console.log('detect is removed now', NetInfo.isConnected);
  }

  handleConnectivityChange = isConnected => {
    const { updateConnect } = this.props;
    updateConnect(isConnected);
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
});

const mapDispatchToProps = dispatch => ({
  startCountdownTimer: () => {
    dispatch(setOfflineCountdown());
  },
  updateAppState: nextAppState => {
    dispatch(appStateChange(nextAppState));
  },
  goToOfflineRabbit: () => {
    dispatch(NavigationActions.navigate({ routeName: 'OffLineRabbit' }));
  },
  goToSleepTimer: () => {
    dispatch(NavigationActions.navigate({ routeName: 'TimerScreen' }));
  },
  resetInterval: () => {
    dispatch(resetOfflineCountdown());
  },
  setTimerEnd: time => {
    dispatch(setEndTime(time));
  },
  updateConnect: newConnectionState => {
    dispatch(updateConnectivity(newConnectionState));
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CountdownToOffline);
