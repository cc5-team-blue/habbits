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
    this.state = {
      user: '0',
    };
  }

  componentWillMount() {
    const db = app.database();
    const ref = db.ref('users');
    const user = ref.child(this.state.user);
    const habits = user.child('habits');
    const earlyMorning = habits.child('early_morning');
    // app
    // .database()
    // .ref('users/0/habits/early_morning/')
    earlyMorning.on('value', data => {
      console.log(result);
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
