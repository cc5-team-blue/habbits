import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { connect } from 'react-redux';
import PercentageCircle from 'react-native-percentage-circle';
import { StackActions } from 'react-navigation';
import { changeInterval, countdown } from '../../actions';

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

    // Start Countdown and set intervalID to state.inverval
    this.intervalID = setInterval(timerStart, 1000);
    changeIntervalCall(this.intervalID);
  }

  shouldComponentUpdate(nextProps) {
    const { goToYay } = this.props;
    // eslint-disable-next-line
    if (nextProps.currentCounter._milliseconds === 0) {
      goToYay();
    }
    return true;
  }

  componentWillUnmount() {
    clearInterval(this.intervalID);
  }

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
          <Text style={styles.timer}> {time} </Text>{' '}
        </PercentageCircle>{' '}
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
});

const mapDispatchToProps = dispatch => ({
  timerStart: () => {
    dispatch(countdown());
  },
  changeIntervalCall: value => {
    dispatch(changeInterval(value));
  },
  goToYay: () => {
    dispatch(StackActions.push({ routeName: 'Success' }));
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Timer);
