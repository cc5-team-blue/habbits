import React from 'react';
import { Text, View, Image, StatusBar } from 'react-native';
import { connect } from 'react-redux';
import { NavigationActions } from 'react-navigation';
import sadRabbit from '../images/sadRabbit.png';
import styles from '../css/styleForSadness';

export const SampleComponent = ({ clickHabbit }) => (
  <View style={styles.realContainer}>
    <StatusBar barStyle="light-content" />
    <Text style={styles.headline}>Aww Snap!</Text>
    <View style={styles.rectangleContainer}>
      <Image style={styles.sadRabbitImage} source={sadRabbit} />
      <Text style={styles.warningText}>
        Please turn off your internet before the timer runs out.
      </Text>
    </View>
    <View onTouchStart={clickHabbit} style={styles.retryButton}>
      <Text style={styles.retryText}>Try Again</Text>
    </View>
  </View>
);

const mapDispatchToProps = dispatch => ({
  changeMichael: () => {
    dispatch(anotherAction('Michael'));
  },
  clickHabbit: () => {
    console.log('Hello Michael');
    dispatch(NavigationActions.navigate({ routeName: 'SleepTimer' }));
  },
});

export default connect(
  null,
  mapDispatchToProps
)(SampleComponent);
