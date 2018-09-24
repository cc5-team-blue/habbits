import React, { Component } from 'react';
import { View, Text, ActivityIndicator, StatusBar } from 'react-native';
import { connect } from 'react-redux';

import styles from '../css/styleForAuth';
import { saveNameToStore, saveUidToStore, setTotalPoints } from '../actions';
import {
  isLoggedIn,
  getNameFromLS,
  getUidFromLS,
  getPointsFromLS,
} from '../helper';

class Loading extends Component {
  async componentDidMount() {
    try {
      const { navigation, saveName, saveUid, savePoints } = this.props;
      // result is the return value from LS
      const result = await isLoggedIn();
      if (result === 'true') {
        const name = await getNameFromLS();
        const uid = await getUidFromLS();
        const points = await getPointsFromLS(uid);
        saveName(name);
        saveUid(uid);
        savePoints(points);
        navigation.navigate('Main');
      } else {
        navigation.navigate('SignUp');
      }
    } catch (err) {
      console.log(err);
    }
  }

  render() {
    return (
      <View style={styles.loading}>
        <StatusBar barStyle="light-content" translucent />
        <ActivityIndicator size="large" />
        <Text style={styles.loadingText}> Loading </Text>
      </View>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  saveName: name => {
    dispatch(saveNameToStore(name));
  },
  saveUid: uid => {
    dispatch(saveUidToStore(uid));
  },
  savePoints: points => {
    dispatch(setTotalPoints(points));
  },
});

export default connect(
  null,
  mapDispatchToProps
)(Loading);
