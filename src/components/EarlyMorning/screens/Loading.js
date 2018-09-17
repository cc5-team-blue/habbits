import React, { Component } from 'react';
import { StyleSheet, View, ActivityIndicator } from 'react-native';
import { app } from '../../../../db';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#39485C',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 24,
  },
});

export default class Loading extends Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    app
      .database()
      .ref('users/0/habits/early_morning/')
      .on('value', data => {
        const result = data.toJSON();
        if (result.tutorial) {
          this.props.navigation.navigate('Start');
        } else {
          this.props.navigation.navigate('Main');
        }
      });
  }

  render() {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" />
      </View>
    );
  }
}
