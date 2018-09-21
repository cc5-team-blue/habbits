import React, { Component } from 'react';
import { Text, View, Image, StatusBar } from 'react-native';
import { app } from '../../../../db';
import happyRabbit from '../images/success.png';
import styles from '../styles/styleForSuccess';

export default class Success extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: '',
      times: 0,
    };
  }

  componentWillMount() {
    this.setState({ user: app.auth().currentUser.uid });
  }

  componentDidMount() {
    app
      .database()
      .ref(`users/${this.state.user}/habits/early_morning/`)
      .on('value', data => {
        const result = data.toJSON();
        this.setState({ active: result.active, times: result.times });
      });
  }

  handleClick = () => {
    this.props.navigation.navigate('Loading');
  };

  render() {
    return (
      <View style={styles.realContainer}>
        <StatusBar barStyle="light-content" />
        <View style={styles.container}>
          <View style={styles.yayImgContainer}>
            <View style={styles.awesomeWrapper}>
              <Text style={[styles.awesomeText, { textAlign: 'center' }]}>Success!</Text>
              <Text style={styles.amazingText}>Have an amazing day!</Text>
            </View>
            <Image style={styles.happyRabbitImage} source={happyRabbit} />
            <Text style={styles.pointsText}>Challenge Progress:</Text>
            <Text style={[styles.challengeText, { color: '#3b495b' }]}>
              {this.state.times}
              /5
            </Text>
          </View>
          <View onTouchStart={this.handleClick} style={styles.yayButton}>
            <Text style={styles.yayText}>Yay!</Text>
          </View>
        </View>
      </View>
    );
  }
}
