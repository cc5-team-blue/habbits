import React, { Component } from 'react';
import { StyleSheet, Text, Image, View, StatusBar, TouchableOpacity } from 'react-native';
import { app } from '../../../db';
import RabbitImg from './images/rabbit.png';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#39485C',
    justifyContent: 'center',
    alignItems: 'center',
  },
  wrapper: {
    height: 527.5,
    width: 325,
    borderRadius: 10,
    backgroundColor: '#FFF8DC',
    justifyContent: 'center',
    alignItems: 'center',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowRadius: 2,
    shadowOpacity: 1,
    marginTop: 20,
    marginBottom: 30,
  },
  header: {
    width: 199,
    height: 45.5,
    fontFamily: 'Futura',
    fontSize: 35,
    fontWeight: 'bold',
    fontStyle: 'normal',
    letterSpacing: 0,
    color: '#ffffff',
  },
  text: {
    width: 280,
    height: 29.5,
    fontFamily: 'Futura',
    fontSize: 18,
    fontWeight: 'bold',
    fontStyle: 'normal',
    letterSpacing: 0,
    textAlign: 'center',
    color: '#555291',
  },
  center: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  img: {
    width: 204.5,
    height: 204.5,
    borderColor: '#5A4A93',
    borderWidth: 5,
    borderRadius: 100,
  },
  headerWrapper: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'flex-start',
  },
});

export default class WrongTime extends Component {
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
    return (
      <View style={styles.container}>
        <StatusBar barStyle="light-content" />
        <View style={styles.headerWrapper}>
          <Text style={styles.header}>Early Start</Text>
        </View>
        <View style={[styles.wrapper, { flex: 7 }]}>
          <View style={[{ flex: 1 }, styles.center]}>
            <Text style={styles.text}>Come Back between</Text>
            <Text style={styles.text}>5:45 and 6:00 am</Text>
          </View>
          <View style={{ flex: 1 }}>
            <Image source={RabbitImg} style={styles.img} />
          </View>
          <View style={[{ flex: 1 }, styles.center]}>
            <Text style={styles.text}>Challenge Progress</Text>
            <Text style={styles.text}>{this.state.times} / 5</Text>
          </View>
        </View>
      </View>
    );
  }
}
