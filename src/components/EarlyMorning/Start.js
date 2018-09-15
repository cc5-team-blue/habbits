import React, { Component } from 'react';
import { StyleSheet, Text, StatusBar, View, Button, Image } from 'react-native';
import { app } from '../../../db';
import coffeeImg from '../../images/EarlyMorning/coffee.png';

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
    backgroundColor: '#fff7dd',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#3b495b',
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
  title: {
    width: 235.5,
    height: 53,
    fontFamily: 'Futura',
    fontSize: 30,
    fontWeight: 'bold',
    fontStyle: 'normal',
    letterSpacing: 0,
    color: '#555291',
  },
  text: {
    width: 235.5,
    height: 44,
    fontFamily: 'Avenir',
    fontSize: 16,
    fontWeight: '900',
    fontStyle: 'normal',
    letterSpacing: 0,
    color: '#555291',
  },
  center: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  img: {
    width: 125,
    height: 125,
    backgroundColor: '#fff7dd',
  },
  headerWrapper: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'flex-start',
  },
  btn: {
    width: 272,
    height: 32.5,
    fontFamily: 'Futura',
    fontSize: 25,
    fontWeight: 'bold',
    fontStyle: 'normal',
    letterSpacing: 0,
    textAlign: 'center',
    color: '#fff7dd',
  },
});

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
            <Text style={styles.text}>- 5-day challenge</Text>
            <Text style={styles.text}>- Wake up before 6am</Text>
            <Text style={styles.text}>- Don’t miss a single morning</Text>
            <View
              style={[
                {
                  width: 325,
                  height: 67.5,
                  borderRadius: 10,
                  backgroundColor: '#555291',
                  flex: 2,
                },
                styles.center,
              ]}
            >
              {/* <Button onPress={this.handleClick} title="Bring it on" style={styles.btn} /> */}
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
