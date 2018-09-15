import React from 'react';
import { Text, View, Image, StatusBar } from 'react-native';
import { connect } from 'react-redux';
import { StackActions } from 'react-navigation';

export const journalFailure = ({ clickHabbit }) => (
  <View>
    <StatusBar barStyle="light-content" />
    <Text>Aww Snap!</Text>
    <View>
      <Image />
      <Text>You forgot to write a journal yesterday. I&#039;m disappointed.</Text>
      <Text>You lost -100P</Text>
    </View>
    <View onTouchStart={clickHabbit}>
      <Text>I&#039;m Sorry!</Text>
    </View>
  </View>
);

const mapDispatchToProps = dispatch => ({
  clickHabbit: () => {
    dispatch(StackActions.push());
  },
});

export default connect(
  null,
  mapDispatchToProps
)(journalFailure);
