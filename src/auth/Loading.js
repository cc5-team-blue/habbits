import React, { Component } from 'react';
import { View, Text, ActivityIndicator } from 'react-native';
import { connect } from 'react-redux';

import styles from '../css/styleForAuth';
import { isLoggedIn, getAllKeyFromLS, getNameFromLS, getUidFromLS } from '../helper';
import { saveNameToStore, saveUidToStore } from '../actions';

class Loading extends Component {
  async componentDidMount() {
    const { saveName, saveUid } = this.props;
    const keys = await getAllKeyFromLS();
    console.log('Existng keys are: ', keys);
    // result is the return value from LS
    const result = await isLoggedIn();
    const { navigation } = this.props;
    if (result === 'true') {
      const name = await getNameFromLS();
      saveName(name);
      const uid = await getUidFromLS();
      saveUid(uid);
      navigation.navigate('Main');
    } else {
      navigation.navigate('SignUp');
    }
  }

  render() {
    return (
      <View style={styles.loading}>
        <Text>Loading</Text>
        <ActivityIndicator size="large" />
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
});

export default connect(
  null,
  mapDispatchToProps
)(Loading);
