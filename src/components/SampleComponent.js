import React from 'react';
import { StyleSheet, Text, View, Button, Image } from 'react-native';
import { connect } from 'react-redux';
import { someActionHere, anotherAction } from '../actions';

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
    flex: 3,
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
    width: 172.5,
    height: 32.5,
    fontFamily: 'Futura',
    fontSize: 25,
    fontWeight: 'bold',
    fontStyle: 'normal',
    letterSpacing: 0,
    color: '#dce0e6',
  },
  habbitImage: {
    position: 'absolute',
    bottom: 0,
    marginLeft: 85,
    width: 152,
    height: 104,
  },
});

export const SampleComponent = ({ tsuyoshi, hiro, nour, michael, changeNour, changeMichael }) => (
  <View style={styles.container}>
    <Text style={styles.headline}>Good Evening {michael}</Text>
    <View style={styles.wrapper}>
      <View style={styles.sleepHabbit}>
        <Image style={styles.habbitImage} source={require('../images/rabbitSmall.png')}></Image>
      </View>
      <View style={styles.sleepHabbitTextBar}>
        <Text style={styles.sleepHabbitText}>Sleep Habbit</Text>
      </View>
    </View>
    <Text>{tsuyoshi}</Text>
    <Text>{hiro}</Text>
    <Text>{nour}</Text>
    <Text>{michael}</Text>
    <Button onPress={changeNour} title="change Nour" />
    <Button onPress={changeMichael} title="change Michael" />
  </View>
);

const mapStateToProps = state => ({
  tsuyoshi: state.sampleData1,
  hiro: state.sampleData2,
  nour: state.sampleData3,
  michael: state.sampleData4,
});

const mapDispatchToProps = dispatch => ({
  changeNour: () => {
    dispatch(someActionHere('Nour'));
  },
  changeMichael: () => {
    dispatch(anotherAction('Michael'));
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SampleComponent);
