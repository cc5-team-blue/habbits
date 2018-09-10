import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { connect } from 'react-redux';
import { setOfflineCountdown } from '../actions';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#3B495B',
  },
  headline: {
    paddingTop: 60,
    paddingLeft: 30,
    flex: 1,
    width: 325,
    height: 45.5,
    fontFamily: 'Futura',
    fontSize: 35,
    fontWeight: 'bold',
    fontStyle: 'normal',
    color: '#ffffff',
    alignSelf: 'flex-start',
    bottom: 0,
  },
  rectangleContainer: {
    flex: 8,
    width: 325,
    borderRadius: 10,
    backgroundColor: '#eb5e65',
    marginBottom: '4%',
  },
  seconds: {
    marginTop: 171,
    width: 325,
    height: 78,
    fontFamily: 'Futura',
    fontSize: 60,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#ffffff',
  },
  toGoOffline: {
    marginTop: 6,
    width: 325,
    height: 32.5,
    fontFamily: 'Futura',
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'rgba(255, 255, 255, 0.68)',
  },
  enterFlightMode: {
    marginTop: 155,
    paddingLeft: 40,
    paddingRight: 40,
    width: 325,
    height: 100,
    fontFamily: 'Futura',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'rgba(255, 255, 255, 0.68)',
  },
});

class OfflineCountdown extends React.Component {
  componentDidMount() {
    const { startCountdownTimer } = this.props;
    this.timerID = setInterval(startCountdownTimer, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

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
});

const mapDispatchToProps = dispatch => ({
  startCountdownTimer: () => {
    dispatch(setOfflineCountdown());
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(OfflineCountdown);
