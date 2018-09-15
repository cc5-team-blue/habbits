import React, { Component } from 'react';
import { StyleSheet, View, Text, NetInfo } from 'react-native';
import { connect } from 'react-redux';
import PercentageCircle from 'react-native-percentage-circle';
import { NavigationActions } from 'react-navigation';
import { changeInterval, countdown, updateConnectivity } from '../../actions';

// If you want to check access to Local Storage, add function from helper and add Button component import from react-native.
// import { retrieveEndTime } from '../helper';

const styles = StyleSheet.create({
  container: {
    marginTop: '30%',
    backgroundColor: '#eb5e65',
    alignItems: 'center',
    alignSelf: 'center',
  },
  timer: {
    fontFamily: 'Futura',
    fontSize: 40,
    fontWeight: 'bold',
    fontStyle: 'normal',
    letterSpacing: 0,
    color: '#fff',
  },
});

export class Timer extends Component {
  componentDidMount() {
    const { timerStart, changeIntervalCall } = this.props;
    NetInfo.isConnected.addEventListener('connectionChange', this.handleConnectivityChange);

    // Start Countdown and set intervalID to state.inverval
    this.intervalID = setInterval(timerStart, 1000);
    changeIntervalCall(this.intervalID);
  }

  shouldComponentUpdate(nextProps) {
    const { goToYay, goToOfflineRabbit, isConnected } = this.props;
    // eslint-disable-next-line
    if (nextProps.currentCounter._milliseconds === 0) {
      goToYay();
    }
    if (isConnected === true) {
      goToOfflineRabbit();
      return false;
    }
    if (nextProps.isConnected === true) {
      goToOfflineRabbit();
    }
    return true;
  }

  componentWillUnmount() {
    clearInterval(this.intervalID);
    NetInfo.isConnected.removeEventListener('connectionChange', this.handleConnectivityChange);
  }

  handleConnectivityChange = isConnected => {
    const { updateConnect } = this.props;
    updateConnect(isConnected);
  };

  render() {
    const { currentCounter, full } = this.props;
    const percentage = `${String(Math.floor((currentCounter * 100) / full))}%`;
    const time = currentCounter.format('h:mm:ss');
    return (
      <View style={styles.container}>
        <PercentageCircle
          borderWidth={14}
          radius={100}
          percent={percentage}
          color="#fff"
          innerColor="#eb5e65"
        >
          <Text style={styles.timer}> {time} </Text>
        </PercentageCircle>
      </View>
    );
  }
}

const mapStateToProps = state => ({
  currentCounter: state.red.counter,
  full: state.red.full,
  isWorking: state.red.isWorking,
  interval: state.red.interval,
  timerDuration: state.red.timerDuration,
  isConnected: state.red.isConnected,
});

const mapDispatchToProps = dispatch => ({
  timerStart: () => {
    dispatch(countdown());
  },
  changeIntervalCall: value => {
    dispatch(changeInterval(value));
  },
  goToYay: () => {
    dispatch(NavigationActions.navigate({ routeName: 'Success' }));
  },
  goToOfflineRabbit: () => {
    dispatch(NavigationActions.navigate({ routeName: 'OffLineRabbit' }));
  },
  updateConnect: newConnectionState => {
    dispatch(updateConnectivity(newConnectionState));
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Timer);
