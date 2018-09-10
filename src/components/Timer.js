import React, { Component } from 'react';
import { StyleSheet, View, Text, Button, AsyncStorage } from 'react-native';
import { connect } from 'react-redux';
import PercentageCircle from 'react-native-percentage-circle';
import moment from 'moment';
import { changeInterval, countdown } from '../actions';

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
    this.counter = props.currentCounter;
    this.full = props.full;
    this.timerStart = props.timerStart;
    this.changeInterval = props.changeInterval;
  }

  componentDidMount() {
    // comment out for implement AsyncStorage
    const intervalID = setInterval(this.timerStart, 1000);
    this.changeInterval(intervalID);
  }

  sayHi = () => {
    console.log("Don't do that");
    const currentTime = moment();
    console.log(currentTime);
    console.log(currentTime.subtract(3, 'hours').format('h:mm'));
  };

  setEndTimer = async () => {
    try {
      const endTime = moment().add(7, 'hours');
      await AsyncStorage.setItem('someKey', 'someValue');
      await AsyncStorage.setItem('endTime', endTime);
    } catch (err) {
      console.log(err);
    }
  };

  retrieveEndTime = async () => {
    try {
      const someKey = await AsyncStorage.getItem('someKey');
      const endTime = await AsyncStorage.getItem('endTime');
      const dataset = [someKey, endTime];

      for (let i = 0; i < dataset.length; i++) {
        if (dataset[i] !== null) {
          console.log(dataset[i]);
        }
      }
    } catch (err) {
      console.log(err);
    }
  };

  removeEndTime = async () => {
    try {
      await AsyncStorage.removeItem('endTime', console.log('remove end time'));
    } catch (err) {
      console.log(err);
    }
  };

  render() {
    const percentage = `${String(Math.floor((this.counter * 100) / this.full))}%`;
    const time = this.counter.format('h:mm');
    return (
      <View style={styles.container}>
        <Button
          onPress={this.sayHi}
          title="Don't push me"
          color="#fff"
          accessibilityLabel="Don't do that"
        />
        <Button
          onPress={this.setEndTimer}
          title="Save data to LS"
          color="#f6eaea"
          accessibilityLabel="Don't do that"
        />
        <Button
          onPress={this.retrieveEndTime}
          title="Retrieve data from LS"
          color="#f6eaea"
          accessibilityLabel="Don't do that"
        />
        <Button
          onPress={this.removeEndTime}
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
