import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { connect } from 'react-redux';
import PercentageCircle from 'react-native-percentage-circle';
import { changeInterval, countdown } from '../actions';

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
  constructor(props) {
    super(props);
    this.counter = props.currentCounter;
    this.full = props.full;
    this.timerStart = props.timerStart;
    this.changeInterval = props.changeInterval;
  }

  componentDidMount() {
    this.countdown();
  }

  countdown = () => {
    const interval = setInterval(() => {
      if (this.counter > 0) {
        const newCount = this.counter.subtract(1, 'seconds');
        this.timerStart(newCount);
      } else {
        const resetInterval = clearInterval(interval);
        this.changeInterval(resetInterval);
      }
    }, 1000);
    console.log(1);
    this.changeInterval(interval);
  };

  render() {
    const percentage = (this.counter * 100) / this.full;
    const time = this.counter.format('h:mm');
    return (
      <View style={styles.container}>
        <Text>{percentage}</Text>
        <PercentageCircle
          borderWidth={14}
          radius={100}
          percent={percentage}
          color="#fff"
          innerColor="#eb5e65"
        >
          <Text style={styles.timer}>{time}</Text>
        </PercentageCircle>
      </View>
    );
  }
}

const mapStateToProps = state => ({
  currentCounter: state.counter,
  full: state.full,
  isWoking: state.isWoking,
  interval: state.interval,
});

const mapDispatchToProps = dispatch => ({
  timerStart: newCount => {
    dispatch(countdown(newCount));
  },
  changeInterval: value => {
    dispatch(changeInterval(value));
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Timer);