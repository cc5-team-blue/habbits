import React from 'react';
import { Text, View, Image, StatusBar } from 'react-native';
import { connect } from 'react-redux';
import { NavigationActions, StackActions } from 'react-navigation';

import sadRabbit from '../images/sadRabbit.png';
import styles from '../css/styleForSadness';

export const SampleComponent = ({ goToHome }) => (
  <View style={styles.realContainer}>
    <StatusBar barStyle="light-content" />
    <Text style={styles.headline}>Aww Snap!</Text>
    <View style={styles.rectangleContainer}>
      <Image style={styles.sadRabbitImage} source={sadRabbit} />
      <Text style={styles.warningText}>
        Please turn off your internet before the timer runs out.
      </Text>
    </View>
    <View onTouchStart={goToHome} style={styles.retryButton}>
      <Text style={styles.retryText}>Try Again</Text>
    </View>
  </View>
);

const mapStateToProps = state => ({
  // state: state.nav,
});

const mapDispatchToProps = dispatch => ({
  goToHome: () => {
    // dispatch(NavigationActions.navigate({ routeName: 'SleepTimer' }));
    dispatch(StackActions.pop({ n: 2 }));
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SampleComponent);
