import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { connect } from 'react-redux';
import { anotherAction, clickedRabbit } from '../actions';
import sleepHabbitImg from '../images/rabbitSmall.png';
import analyticsImage from '../images/analyticsImage.png';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  headline: {
    flex: 1,
    paddingTop: 60,
    paddingLeft: 30,
    width: 308,
    height: 91,
    fontFamily: 'Futura',
    fontSize: 35,
    fontWeight: 'bold',
    fontStyle: 'normal',
    letterSpacing: 0,
    color: '#ffffff',
  },
  wrapper: {
    flex: 4,
    alignItems: 'center',
  },
  sleepHabbit: {
    height: 150,
    width: 325,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    backgroundColor: '#eb5e65',
    shadowColor: '#3B495B',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowRadius: 2,
    shadowOpacity: 1,
  },
  sleepHabbitTextBar: {
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    width: 325,
    height: 57,
    backgroundColor: '#576371',
  },
  sleepHabbitText: {
    width: 325,
    height: 32.5,
    fontFamily: 'Futura',
    fontSize: 25,
    fontWeight: 'bold',
    fontStyle: 'normal',
    letterSpacing: 0,
    color: '#dce0e6',
    textAlign: 'center',
  },
  habbitImage: {
    position: 'absolute',
    bottom: 0,
    marginLeft: 85,
    width: 152,
    height: 104,
  },
  analytics: {
    width: 325,
    height: 123.5,
    borderRadius: 10,
    backgroundColor: '#576371',
    shadowColor: '#3B495B', // refactor
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowRadius: 2,
    shadowOpacity: 1,
    marginTop: 20,
  },
  analyticsImage: {
    position: 'absolute',
    marginTop: 0,
    width: 325,
    height: 123.5,
    borderRadius: 10,
  },
  analyticsText: {
    width: 325,
    height: 30,
    fontFamily: 'Futura',
    fontSize: 25,
    fontWeight: 'bold',
    fontStyle: 'normal',
    letterSpacing: 0,
    color: '#dce0e6',
    textAlign: 'center',
  },
  textBox: {
    height: 41,
    alignItems: 'flex-end',
    position: 'absolute',
    bottom: 0,
  },
  achievements: {
    paddingTop: '4%',
    width: '87%',
  },
  achievementsText: {
    textAlign: 'left',
    width: 225,
    height: 26,
    fontFamily: 'Futura',
    fontSize: 20,
    fontWeight: 'bold',
    fontStyle: 'normal',
    letterSpacing: 0,
    color: '#ffffff',
  },
  achievementsIconContainer: {
    paddingTop: 10,
    flex: 1,
    flexDirection: 'row',
  },
  achievementsIconLeft: {
    marginRight: '3%',
    width: 66,
    height: 66,
    opacity: 0.71,
    borderRadius: 10,
    backgroundColor: '#626d7b',
  },
  achievementsIconMiddle: {
    marginLeft: '3.5%',
    marginRight: '3%',
    width: 66,
    height: 66,
    opacity: 0.71,
    borderRadius: 10,
    backgroundColor: '#626d7b',
  },
  achievementsIconRight: {
    marginLeft: '3%',
    width: 66,
    height: 66,
    opacity: 0.71,
    borderRadius: 10,
    backgroundColor: '#626d7b',
  },
});

export const SampleComponent = ({ clickHabbit, clickRabbit }) => (
  <View style={styles.container}>
    <Text style={styles.headline}>Good Evening {'Habbits'}</Text>{' '}
    <View onTouchStart={clickHabbit} style={styles.wrapper}>
      <View onTouchStart={clickRabbit} style={styles.sleepHabbit}>
        <Image style={styles.habbitImage} source={sleepHabbitImg} />{' '}
      </View>{' '}
      <View style={styles.sleepHabbitTextBar}>
        <Text style={styles.sleepHabbitText}>Sleep Habbit</Text>{' '}
      </View>{' '}
      <View style={styles.analytics}>
        <Image style={styles.analyticsImage} source={analyticsImage} />{' '}
        <View flex bottom style={styles.textBox}>
          <Text style={styles.analyticsText}>Analytics</Text>{' '}
        </View>
      </View>{' '}
      <View style={styles.achievements}>
        <Text style={styles.achievementsText}>Recent Achievements</Text>
        <View style={styles.achievementsIconContainer}>
          <View style={styles.achievementsIconLeft}>1</View>
          <View style={styles.achievementsIconMiddle}>2</View>
          <View style={styles.achievementsIconMiddle}>3</View>
          <View style={styles.achievementsIconRight}>4</View>
        </View>
      </View>
    </View>{' '}
  </View>
);

const mapStateToProps = state => ({
  tsuyoshi: state.sampleData1,
  hiro: state.sampleData2,
  nour: state.sampleData3,
  michael: state.sampleData4,
});

const mapDispatchToProps = dispatch => ({
  changeMichael: () => {
    dispatch(anotherAction('Michael'));
  },
  clickHabbit: () => {
    console.log('clicked');
  },
  clickRabbit: () => {
    dispatch(clickedRabbit(true));
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SampleComponent);
