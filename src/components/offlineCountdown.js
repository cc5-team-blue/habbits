import React, { Component } from 'react';
import { Text, View, Alert, AppState, NetInfo } from 'react-native';
import { connect } from 'react-redux';
import { NavigationActions } from 'react-navigation';
import { setOfflineCountdown, appStateChange, updateConnectivity } from '../actions';
import styles from '../css/styleForOfflineCountdonw';

class OfflineCountdown extends Component {
  componentDidMount() {
    const { startCountdownTimer, offlineSeconds, goToOfflineRabbit } = this.props;
    if (offlineSeconds === 1) {
      console.log(offlineSeconds);
      goToOfflineRabbit();
    }
    this.timerID = setInterval(startCountdownTimer, 1000);
    AppState.addEventListener('change', this.handleAppStateChange);
    NetInfo.isConnected.addEventListener('connectionChange', this.handleConnectivityChange);
  }

  shouldComponentUpdate(nextProps) {
    const { goToOfflineRabbit } = this.props;
    if (nextProps.offlineSeconds === 0) {
      goToOfflineRabbit();
    }
    return true;
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
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
    const { offlineSeconds, appState, isConnected } = this.props;
    if (appState === 'background') {
      console.log(appState);
      return <Text style={{ marginTop: 60 }}>Good Bye bro</Text>;
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
    console.log('clicked');
    dispatch(NavigationActions.navigate({ routeName: 'OffLineRabbit' }));
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
