import React, { Component } from 'react';
import { Text, View, StatusBar, TouchableOpacity } from 'react-native';
import { app } from '../../../../db';
import styles from '../styles/styleForCorrectTime';

export default class CorrectTime extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: '',
      times: 0,
    };
  }

  componentDidMount() {
    this.setState({ user: app.auth().currentUser.uid });

    app
      .database()
      .ref(`users/${this.state.user}/habits/early_morning/`)
      .on('value', data => {
        const result = data.toJSON();
        this.setState({
          times: result.times,
        });
      });
  }

  handleClick = () => {
    app
      .database()
      .ref(`users/${this.state.user}/habits/early_morning/`)
      .update({ times: this.state.times + 1, clickDate: Date.now() });
    this.props.navigation.navigate('Success');
  };

  render() {
    // correct time
    return (
      <View style={styles.container}>
        <StatusBar barStyle="light-content" />
        <Text style={styles.header}>Early Start</Text>
        <View style={styles.wrapper}>
          <Text style={styles.text}>Good Morning Handsome!</Text>
          <View>
            <TouchableOpacity onPress={this.handleClick}>
              <View style={styles.img} />
            </TouchableOpacity>
          </View>
          <Text style={styles.text2}>PUSH ME</Text>
        </View>
      </View>
    );
  }
}
