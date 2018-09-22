import React from 'react';
import { Text, View, Image, StatusBar } from 'react-native';
import { connect } from 'react-redux';
import { NavigationActions } from 'react-navigation';
import { loseSleepPoint } from '../../helper';
import { setTotalPoints } from '../../actions';

import sadRabbit from '../../images/sadRabbit.png';
import styles from '../../css/styleForSadness';

export const FailureMinus = ({ goToHome, uid, points }) => (
  <View style={styles.realContainer}>
    <StatusBar barStyle="light-content" />
    <View style={styles.headlineWrapper}>
      <Text style={styles.headline}>Aww Snap!</Text>
    </View>
    <View style={styles.rectangleContainer}>
      <Image style={styles.sadRabbitImage} source={sadRabbit} />
      <Text style={styles.warningText}>Please stay offline until the timer runs out.</Text>
      <Text style={styles.minusText}>You lost -200P</Text>
    </View>
    <View onTouchStart={() => goToHome(uid, points)} style={styles.retryButton}>
      <Text style={styles.retryText}>Sorry!</Text>
    </View>
  </View>
);

const mapStateToProps = state => ({
  uid: state.red.uid,
  points: state.red.totalPoints,
});

const mapDispatchToProps = dispatch => ({
  goToHome: (uid, points) => {
    let newPoints = points - 200;
    if (newPoints < 0) newPoints = 0;
    loseSleepPoint(uid, newPoints);
    dispatch(setTotalPoints(newPoints));
    dispatch(NavigationActions.navigate({ routeName: 'Main' }));
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FailureMinus);
