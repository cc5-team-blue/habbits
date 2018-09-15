import React, { Component } from 'react';
import { StyleSheet, View, StatusBar, ActivityIndicator } from 'react-native';

const moment = require('moment');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#39485C',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default class Main extends Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    if (moment().hour() === 5 && (moment().minute() >= 45 && moment().minute() <= 59)) {
      this.props.navigation.navigate('CorrectTime');
    } else {
      this.props.navigation.navigate('WrongTime');
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <StatusBar barStyle="light-content" />
        <ActivityIndicator size="large" />
      </View>
    );
  }
}
