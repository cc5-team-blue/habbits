import React, { Component } from 'react';
import { Text, StatusBar, View, Image } from 'react-native';
import { app } from '../../../../db';
import coffeeImg from '../images/coffee.png';
import styles from '../styles/styleForStart';

export default class Start extends Component {
  constructor(props) {
    super(props);
  }

  handleClick = () => {
    app
      .database()
      .ref('users/0/habits/early_morning/')
      .update({
        tutorial: false,
        active: true,
        startDate: Date.now(),
        clickDate: 0,
      })
      .then(this.props.navigation.navigate('Main'));
  };

  render() {
    return (
      <View style={styles.container}>
        <StatusBar barStyle="light-content" />
        <Text style={styles.header}>Early Start</Text>
        <View style={styles.wrapper}>
          <Image source={coffeeImg} style={styles.img} />
          <Text style={styles.title}>Description:</Text>
          <Text style={styles.text}>This modules helps you build an early morning habbit.</Text>
          <Text style={styles.title2}>Challenge:</Text>
          <Text style={styles.text2}>
            - 5-day challenge
            {'\n'}- Wake up before 6am
            {'\n'}- Don’t miss a single morning
            {'\n'}
            {'\n'}
          </Text>
          <View style={styles.btnWrapper}>
            <Text onPress={this.handleClick} style={styles.btn}>
              Bring it on
            </Text>
          </View>
        </View>
      </View>
    );
  }
}
