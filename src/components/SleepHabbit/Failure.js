import React from 'react';
import { Text, View, Image, StatusBar } from 'react-native';
import { connect } from 'react-redux';
import { NavigationActions } from 'react-navigation';

import sadRabbit from '../../images/sadRabbit.png';
import styles from '../../css/styleForSadness';
import ExitButton from '../ExitButton';

export const Failure = ({ goToHome }) => (
  <View style={styles.realContainer}>
    <StatusBar barStyle="light-content" translucent />
    <View style={styles.headlineWrapper}>
      <Text style={styles.headline}>Aww Snap!</Text>
      <ExitButton />
    </View>
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

const mapDispatchToProps = dispatch => ({
  goToHome: () => {
    dispatch(NavigationActions.navigate({ routeName: 'Main' }));
  },
});

export default connect(
  null,
  mapDispatchToProps
)(Failure);
