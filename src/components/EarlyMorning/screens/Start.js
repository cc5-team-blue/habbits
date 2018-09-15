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
      .update({ tutorial: false })
      .then(this.props.navigation.navigate('Main'));
  };

  render() {
    return (
      <View style={styles.container}>
        <StatusBar barStyle="light-content" />
        <View style={styles.headerWrapper}>
          <Text style={styles.header}>Early Start</Text>
        </View>
        <View style={[styles.wrapper, { flex: 7 }]}>
          <View style={[{ flex: 1, justifyContent: 'flex-start', marginTop: 30 }]}>
            <Image source={coffeeImg} style={[styles.img, { alignItems: 'flex-end' }]} />
          </View>
          <View style={[{ flex: 2 }, styles.center]}>
            <Text style={styles.title}>Describtion:</Text>
            <Text style={styles.text}>This modules helps you build an early morning habbit.</Text>
          </View>
          <View style={[{ flex: 2 }, styles.center]}>
            <Text style={styles.title}>Challenge:</Text>
            <Text style={styles.text}>
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
      </View>
    );
  }
}
