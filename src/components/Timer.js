import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { connect } from 'react-redux';
import PercentageCircle from 'react-native-percentage-circle';
import { NavigationActions } from 'react-navigation';
import { changeInterval, countdown } from '../actions';

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

    // Start Countdown and set intervalID to state.inverval
    const intervalID = setInterval(timerStart, 1000);
    changeIntervalCall(intervalID);
  }

  shouldComponentUpdate(nextProps) {
    const { goToYay } = this.props;
    if (nextProps.currentCounter._milliseconds === 0) {
      goToYay();
    }
    return true;
  }

  render() {
    const { currentCounter, full } = this.props;
    const percentage = `${String(Math.floor((currentCounter * 100) / full))}%`;
    const time = currentCounter.format('h:mm:ss');
    return (
      <View style={styles.container}>
        {/* If you want to check access to LocalStorage Uncomment Button component */}
        {/* <Button
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
        <Text> {percentage} </Text>{' '} */}
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
    dispatch(NavigationActions.navigate({ routeName: 'Success' }));
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Timer);
