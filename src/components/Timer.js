import React, { Component } from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';
import { connect } from 'react-redux';
import PercentageCircle from 'react-native-percentage-circle';
import { changeInterval, countdown } from '../actions';
import { sayHi, setEndTimer, retrieveEndTime, removeEndTime } from '../helper';

const styles = StyleSheet.create({
  container: {
    // marginTop: '30%',
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
    this.timerStart = props.timerStart;
    this.changeInterval = props.changeInterval;
  }

  componentDidMount() {
    const intervalID = setInterval(this.timerStart, 1000);
    this.changeInterval(intervalID);
  }

  // shouldComponentUpdate(nextProps, nextState) {
  //   console.log("Hi Tsuyoshi")
  //   if (this.counter !== nextProps.currentCounter) {
  //     return false;
  //   }
  //   // if (this.counter !== nextState.counter) {
  //   //   return true;
  //   // }
  //   return false;
  // }

  render() {
    const {currentCounter, full} = this.props;
    const percentage = `${String(Math.floor((currentCounter * 100) / full))}%`;
    const time = currentCounter.format('h:mm:ss');
    return (
      <View style={styles.container}>
        <Button
          onPress={sayHi}
          title="Don't push me"
          color="#fff"
          accessibilityLabel="Don't do that"
        />
        <Button
          onPress={setEndTimer}
          title="Save data to LS"
          color="#f6eaea"
          accessibilityLabel="Don't do that"
        />
        <Button
          onPress={retrieveEndTime}
          title="Retrieve data from LS"
          color="#f6eaea"
          accessibilityLabel="Don't do that"
        />
        <Button
          onPress={removeEndTime}
          title="Bomberman"
          color="#f6eaea"
          accessibilityLabel="Don't do that"
        />
        <Text> {percentage} </Text>{' '}
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
  changeInterval: value => {
    dispatch(changeInterval(value));
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Timer);
