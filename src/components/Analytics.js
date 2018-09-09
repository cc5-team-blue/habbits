import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import { app, insert, push, select, update, remove } from '../../db';

const moment = require('moment');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  text: {
    fontFamily: 'Futura',
    fontSize: 25,
    fontWeight: 'bold',
    fontStyle: 'normal',
    letterSpacing: 0,
    color: '#ffffff',
  },
  unlocked: {
    fontFamily: 'Futura',
    fontSize: 15,
    fontWeight: 'bold',
    fontStyle: 'normal',
    letterSpacing: 0,
    color: '#FFEDA3',
    textAlign: "center"
  },
  achievement: {
    fontFamily: 'Futura',
    fontSize: 25,
    fontWeight: 'bold',
    fontStyle: 'normal',
    letterSpacing: 0,
    color: '#FFFFFF',
    backgroundColor:'#FC405B',
    padding: 15,
    marginLeft: 20,
    marginRight: 20,
    textAlign: "center"
  },
  plus: {
    fontFamily: 'Futura',
    fontSize: 25,
    fontWeight: 'bold',
    fontStyle: 'normal',
    letterSpacing: 0,
    color: '#00D6CC',
  },
  minus: {
    fontFamily: 'Futura',
    fontSize: 25,
    fontWeight: 'bold',
    fontStyle: 'normal',
    letterSpacing: 0,
    color: '#FC405B',
  },
  headline: {
    paddingTop: 60,
    paddingLeft: 30,
    paddingBottom: 30,
    fontFamily: 'Futura',
    fontSize: 35,
    fontWeight: 'bold',
    fontStyle: 'normal',
    letterSpacing: 0,
    color: '#ffffff',
  },
  wrapper: {
    flex: 3,
  },
  row:{
    flexDirection:"row",
    justifyContent: 'space-between',
    margin: 10,
  }
});

class Analytics extends Component {
  constructor() {
    super();
    this.state = {
      achievements: [],
    };
  }

  componentDidMount() {
    const db = app.database();
    const ref = db.ref('users/0/achievements');
    const achievements = [];
    ref.on('value', data => {
      data.forEach(child => {
        const obj = {};
        obj.key = child.key;
        obj.val = child.val();
        achievements.push(obj);
        this.setState({ achievements });
      });
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.headline}>Analytics</Text>
        <ScrollView>
          {this.state.achievements.map(item => {
            if (item.val.type === 'plus') {
              return (
                <View key={item.key} style={styles.row}>
                  <Text style={styles.text}>{moment(item.val.date).format('MM/DD')} </Text>
                  <Text style={styles.plus}>+{item.val.points} Points</Text>
                </View>
              );
            }
            if (item.val.type === 'minus') {
              return (
                <View key={item.key} style={styles.row}>
                  <Text style={styles.text}>{moment(item.val.date).format('MM/DD')} </Text>
                  <Text style={styles.minus}>-{item.val.points} Points</Text>
                </View>
              );
            }
            if (item.val.type === 'achievement') {
              return (
                <View key={item.key}>
                  <Text style={styles.unlocked}>{"Achievement Unlocked!\n"}</Text>
                  <Text style={styles.achievement}>{item.val.title}</Text>
                </View>
              );
            }
          })}
      </ScrollView>
        </View>
    );
  }
}

export default Analytics;
