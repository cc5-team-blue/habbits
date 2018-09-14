import React from 'react';
import { Text, View, Image, StatusBar } from 'react-native';
import { connect } from 'react-redux';
import { NavigationActions } from 'react-navigation';

import happyRabbit from '../images/happyRabbit.png';
import styles from '../css/styleForSuccess';

export const SampleComponent = ({ clickHabbit }) => (
  <View style={styles.realContainer}>
    <StatusBar barStyle="light-content" />
    <View style={styles.container}>
      <View style={styles.yayImgContainer}>
        <View style={styles.awesomeWrapper}>
          <Text style={styles.youAreText}>You are</Text>
          <Text style={styles.awesomeText}>AWESOME!</Text>
        </View>
        <Image style={styles.happyRabbitImage} source={happyRabbit} />
        <Text style={styles.pointsText}>You gained +300P</Text>
      </View>
      <View onTouchStart={clickHabbit} style={styles.yayButton}>
        <Text style={styles.yayText}>Yay!</Text>
      </View>
    </View>
  </View>
);

const mapDispatchToProps = dispatch => ({
  clickHabbit: () => {
    dispatch(NavigationActions.navigate({ routeName: 'Main' }));
  },
});

export default connect(
  null,
  mapDispatchToProps
)(SampleComponent);
