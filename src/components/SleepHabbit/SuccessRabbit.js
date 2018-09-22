import React from 'react';
import { Text, View, Image, StatusBar } from 'react-native';
import { connect } from 'react-redux';
import { NavigationActions } from 'react-navigation';
import { getSleepPoint } from '../../helper';

import happyRabbit from '../../images/happyRabbit.png';
import styles from '../../css/styleForSuccess';

export const SampleComponent = ({ clickHabbit, uid }) => (
  <View style={styles.realContainer}>
    <StatusBar barStyle="light-content" translucent />
    <View style={styles.container}>
      <View style={styles.yayImgContainer}>
        <View style={styles.awesomeWrapper}>
          <Text style={styles.youAreText}>You are</Text>
          <Text style={styles.awesomeText}>AWESOME!</Text>
        </View>
        <Image style={styles.happyRabbitImage} source={happyRabbit} />
        <Text style={styles.pointsText}>You gained +150P</Text>
      </View>
      <View onTouchStart={() => clickHabbit(uid)} style={styles.yayButton}>
        <Text style={styles.yayText}>Yay!</Text>
      </View>
    </View>
  </View>
);

const mapStateToProps = state => ({
  uid: state.red.uid,
});

const mapDispatchToProps = dispatch => ({
  clickHabbit: uid => {
    getSleepPoint(uid);
    dispatch(NavigationActions.navigate({ routeName: 'Main' }));
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SampleComponent);
