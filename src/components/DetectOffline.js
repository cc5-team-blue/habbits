import React, { Component } from 'react';
import { View, NetInfo } from 'react-native';
import { connect } from 'react-redux';
import { NavigationActions } from 'react-navigation';
import { updateConnectivity } from '../actions';

class DetectOffline extends Component {
  componentDidMount() {
    NetInfo.isConnected.addEventListener('connectionChange', this.handleConnectivityChange);
    const { isConnected, goToSleepTimer } = this.props;
    if (isConnected === false) {
      goToSleepTimer();
    }
    console.log('detect is starting from here', isConnected);
  }

  shouldComponentUpdate(nextProps) {
    const { goToSleepTimer, goToOfflineRabbit, isConnected } = this.props;
    if (nextProps.isConnected !== isConnected && nextProps.isConnected === false) {
      goToSleepTimer();
      return false;
    }
    // if (nextProps.isConnected !== isConnected && nextProps.isConnected === true) {
    //   goToOfflineRabbit();
    //   return false;
    // }
    return true;
  }

  // componentDidUpdate(prevProps) {
  //   const { goToSleepTimer, goToOfflineRabbit, isConnected } = this.props;
  //   if ((prevProps.isConnected === true && isConnected === false) || isConnected === false) {
  //     goToSleepTimer();
  //   }
  //   if ((prevProps.isConnected === false && isConnected === true) || isConnected === true) {
  //     goToOfflineRabbit();
  //   }
  //   return false;
  // }

  componentWillUnmount() {
    NetInfo.isConnected.removeEventListener('connectionChange', this.handleConnectivityChange);
    console.log('detect is removed now', NetInfo.isConnected);
  }

  handleConnectivityChange = isConnected => {
    const { updateConnect } = this.props;
    updateConnect(isConnected);
  };

  render() {
    return <View style={{ width: 0, height: 0 }} />;
  }
}

const mapStateToProps = state => ({
  isConnected: state.red.isConnected,
});

const mapDispatchToProps = dispatch => ({
  updateConnect: newConnectionState => {
    dispatch(updateConnectivity(newConnectionState));
  },
  goToOfflineRabbit: () => {
    dispatch(NavigationActions.navigate({ routeName: 'OffLineRabbit' }));
  },
  goToSleepTimer: () => {
    dispatch(NavigationActions.navigate({ routeName: 'TimerScreen' }));
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DetectOffline);
