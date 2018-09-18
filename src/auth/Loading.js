import React, { Component } from 'react';
import { View, Text, ActivityIndicator } from 'react-native';

import styles from '../css/styleForAuth';
import { isLoggedIn } from '../helper';

export default class Loading extends Component {
  componentDidMount() {
    const result = isLoggedIn();
    const { navigation } = this.props;
    result.then(data => {
      if (data === 'true') {
        navigation.navigate('Main');
      } else {
        navigation.navigate('SignUp');
      }
    });
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
