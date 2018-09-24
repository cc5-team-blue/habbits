import React from 'react';
import { Text, View, StatusBar } from 'react-native';
import { connect } from 'react-redux';
import { NavigationActions } from 'react-navigation';

import styles from '../css/styleForSuccess';
import { logout } from '../helper';

export const UserInfo = ({ clickHabbit }) => (
  <View style={styles.realContainer}>
    <StatusBar barStyle="light-content" translucent />
    <View style={styles.container}>
      <View onTouchStart={clickHabbit} style={styles.yayButton}>
        <Text style={styles.yayText}>Yay!</Text>
      </View>
    </View>
  </View>
);

const mapDispatchToProps = dispatch => ({
  clickHabbit: () => {
    logout();
    dispatch(NavigationActions.navigate({ routeName: 'Main' }));
  },
});

export default connect(
  null,
  mapDispatchToProps
)(UserInfo);
