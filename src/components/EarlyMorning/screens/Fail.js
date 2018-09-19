import React, { Component } from 'react';
import { Text, View, Image, StatusBar } from 'react-native';
import styles from '../styles/styleForFail';
import rabbitImg from '../images/rabbit.png';

export default class Fail extends Component {
  handleClick = () => {
    this.props.navigation.navigate('Loading');
  };

  render() {
    return (
      <View style={styles.realContainer}>
        <StatusBar barStyle="light-content" />
        <Text style={styles.headline}>Aww Snap!</Text>
        <View style={styles.rectangleContainer}>
          <Image style={styles.sadRabbitImage} source={rabbitImg} />
          <Text style={styles.warningText}>
            You missed pressing the button. You snooze you lose!
          </Text>
          <Text style={styles.pointText}>You lost -100P</Text>
        </View>
        <View onTouchStart={this.handleClick} style={styles.retryButton}>
          <Text style={styles.retryText}>I’m Sorry!</Text>
        </View>
      </View>
    );
  }
}
