import React, { Component } from 'react';
import { StyleSheet, Text, TextInput, View, Button } from 'react-native';
import { app } from '../../../db';

export default class Start extends Component {
  constructor(props) {
    super(props);
  }

  handleClick = () => {
    app
      .database()
      .ref('users/0/habits/early_morning/')
      .update({ tutorial: false })
      .then(this.props.navigation.navigate('Main'));
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Start</Text>
        <Text style={styles.text}>Description:</Text>
        <Button onPress={this.handleClick} title="Bring it on" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 24,
  },
});
