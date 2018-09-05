import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { connect } from 'react-redux';
import { someActionHere, anotherAction } from '../actions';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export const SampleComponent = ({ tsuyoshi, hiro, nour, michael, changeNour, changeMichael }) => (
  <View style={styles.container}>
    <Text>{tsuyoshi}</Text>
    <Text>{hiro}</Text>
    <Text>{nour}</Text>
    <Text>{michael}</Text>
    <Text>{process.env.REACT_NATIVE_SENDER_ID}</Text>
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
