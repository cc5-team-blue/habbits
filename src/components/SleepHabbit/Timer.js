import React, { Component } from 'react';
import { StyleSheet, View, Text, NetInfo, Platform } from 'react-native';
import { connect } from 'react-redux';
import PercentageCircle from 'react-native-percentage-circle';
import { NavigationActions } from 'react-navigation';
import moment from 'moment';
import { getDifference } from '../../helper';
import { changeInterval, countdown, updateConnectivity, setCurrentCounter } from '../../actions';

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
  timerForAndroid: {
    fontFamily: 'Futura',
    fontSize: 48,
    fontWeight: 'bold',
    fontStyle: 'normal',
    letterSpacing: 0,
    color: '#fff',
  },
  timerForseconds: {
    fontFamily: 'Futura',
    fontSize: 33,
    fontWeight: 'bold',
    fontStyle: 'normal',
    letterSpacing: 0,
    color: '#fff',
    opacity: 0.5,
  },
});

export class Timer extends Component {
  componentDidMount() {
    const { displayDifference, changeIntervalCall } = this.props;
    displayDifference();
    NetInfo.isConnected.addEventListener('connectionChange', this.handleConnectivityChange);

    // Start Countdown and set intervalID to state.inverval
    this.intervalID = setInterval(displayDifference, 1000);
    changeIntervalCall(this.intervalID);
  }

  shouldComponentUpdate(nextProps) {
    const { goToYay, goToOfflineRabbit, isConnected, goToFailureMinus } = this.props;
    // eslint-disable-next-line
    if (nextProps.currentCounter < 0) {
      goToYay();
    }
    if (isConnected === true) {
      goToOfflineRabbit();
      return false;
    }
    if (nextProps.isConnected === true) {
      goToFailureMinus();
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
    const { currentCounter } = this.props;
    const seconds = Math.floor((currentCounter / 1000) % 60);
    const percentage = 100 - (seconds / 60) * 100;
    console.log(percentage);
    // const minutes = (currentCounter / (1000 * 60)) % 60;
    // const hours = (currentCounter / (1000 * 60 * 60)) % 24;
    let timeFormatted;
    let secondsFormatted;
    if (currentCounter > 3599999) {
      timeFormatted = moment(currentCounter)
        .utc()
        .format('hh:mm');
      secondsFormatted = moment(currentCounter)
        .utc()
        .format('ss');
    } else {
      timeFormatted = moment(currentCounter)
        .utc()
        .format('mm:ss');
    }
    // const time = currentCounter.format('h:mm:ss');

    if (Platform.OS === 'android') {
      return (
        <View style={styles.container}>
          <Text style={styles.timerForseconds}> {secondsFormatted || ''}s</Text>
          <Text style={styles.timerForAndroid}> {timeFormatted} </Text>
        </View>
      );
    }
    return (
      <View style={styles.container}>
        <PercentageCircle
          borderWidth={14}
          radius={100}
          percent={percentage}
          color="#fff"
          bgcolor="#eb5e65"
          innerColor="#eb5e65"
        >
          <Text style={styles.timer}> {timeFormatted} </Text>
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
  displayDifference: async () => {
    const newCounter = await getDifference();
    dispatch(setCurrentCounter(newCounter));
  },
  goToFailureMinus: () => {
    dispatch(NavigationActions.navigate({ routeName: 'FailureMinus' }));
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Timer);
