import React from 'react';
import { Text, View, Image, StatusBar } from 'react-native';
import { connect } from 'react-redux';

import styles from '../styles/styleForFail';
import rabbitImg from '../images/rabbit.png';
import { setTotalPoints } from '../../../actions';
import { loseEarlyMorningPoints } from '../../../helper';

const Fail = ({ uid, points, handleClick, navigation }) => (
  <View style={styles.realContainer}>
    <StatusBar barStyle="light-content" />
    <Text style={styles.headline}>Aww Snap!</Text>
    <View style={styles.rectangleContainer}>
      <Image style={styles.sadRabbitImage} source={rabbitImg} />
      <Text style={styles.warningText}>You missed pressing the button. You snooze you lose!</Text>
      <Text style={styles.pointText}>You lost -100P</Text>
    </View>
    <View onTouchStart={() => handleClick(uid, points, navigation)} style={styles.retryButton}>
      <Text style={styles.retryText}>I’m Sorry!</Text>
    </View>
  </View>
);

const mapStateToProps = state => ({
  uid: state.red.uid,
});

const mapDispatchToProps = dispatch => ({
  handleClick: (uid, points, navigation) => {
    let newPoints = points - 100;
    if (newPoints < 0) newPoints = 0;
    loseEarlyMorningPoints(uid, newPoints);
    dispatch(setTotalPoints(newPoints));
    navigation.navigate('loading');
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Fail);
