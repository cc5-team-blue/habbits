import React from 'react';
import { Text, View, StatusBar } from 'react-native';
import { connect } from 'react-redux';
import { NavigationActions } from 'react-navigation';

import { anotherAction } from '../actions';
import styles from '../css/styleForSuccess';

export const SampleComponent = ({ clickHabbit }) => (
  <View style={styles.realContainer}>
    <StatusBar barStyle="light-content" />
    <View style={styles.container}>
      <View onTouchStart={clickHabbit} style={styles.yayButton}>
        <Text style={styles.yayText}>Yay!</Text>
      </View>
    </View>
  </View>
);

const mapDispatchToProps = dispatch => ({
  changeMichael: () => {
    dispatch(anotherAction('Michael'));
  },
  clickHabbit: () => {
    console.log('Hello Michael');
    dispatch(NavigationActions.navigate({ routeName: 'Main' }));
  },
});

export default connect(
  null,
  mapDispatchToProps
)(SampleComponent);
