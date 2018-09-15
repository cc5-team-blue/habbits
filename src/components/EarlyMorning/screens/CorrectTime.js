import React, { Component } from 'react';
import { Text, View, StatusBar, TouchableOpacity } from 'react-native';
import { app } from '../../../../db';
import styles from '../styles/styleForCorrectTime';

export default class CorrectTime extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userID: 0,
      active: false,
      times: 0,
    };
  }

  componentDidMount() {
    app
      .database()
      .ref(`users/${this.state.userID}/habits/early_morning/`)
      .on('value', data => {
        const result = data.toJSON();
        this.setState({ active: result.active, times: result.times });
      });
  }

  handleClick = () => {
    console.log('Clicked');
  };

  render() {
    // correct time
    return (
      <View style={styles.container}>
        <StatusBar barStyle="light-content" />
        <View style={styles.headerWrapper}>
          <Text style={styles.header}>Early Start</Text>
        </View>
        <View style={[styles.wrapper, { flex: 7 }]}>
          <View style={[{ flex: 1 }, styles.center]}>
            <Text style={styles.text}>Good Morning Handsome!</Text>
          </View>
          <View style={{ flex: 1 }}>
            <TouchableOpacity onPress={this.handleClick}>
              <View style={styles.img} />
            </TouchableOpacity>
          </View>
          <View style={[{ flex: 1 }, styles.center]}>
            <Text style={styles.text2}>PUSH ME</Text>
          </View>
        </View>
      </View>
    );
  }
}
