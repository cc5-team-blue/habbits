import React, { Component } from 'react';
import { Text, View, Image, StatusBar } from 'react-native';
import { app } from '../../../../db';
import happyRabbit from '../images/success.png';
import styles from '../styles/styleForBigSuccess';

export default class BigSuccess extends Component {
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
        this.setState({ times: result.times });
      });
  }

  handleClick = () => {
    console.log('Clicked');
  };

  render() {
    return (
      <View style={styles.realContainer}>
        <StatusBar barStyle="light-content" />
        <View style={styles.container}>
          <View style={styles.yayImgContainer}>
            <View style={styles.awesomeWrapper}>
              <Text style={styles.youAreText}>You are</Text>
              <Text style={styles.awesomeText}>AWESOME!</Text>
            </View>
            <Image style={styles.happyRabbitImage} source={happyRabbit} />
            <Text style={styles.countText}>
              {this.state.times}
              /5
            </Text>
            <Text style={styles.pointText}>You gained +300P</Text>
          </View>
          <View onTouchStart={this.handleClick} style={styles.yayButton}>
            <Text style={styles.yayText}>Yay!</Text>
          </View>
        </View>
      </View>
    );
  }
}
