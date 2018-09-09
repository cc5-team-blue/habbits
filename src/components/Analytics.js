import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import { app, insert, push, select, update, remove } from '../../db';
import achievementImg from '../images/achievement.png';
import arrowUpImg from '../images/arrow-up-circle.png';
import arrowDownImg from '../images/arrow-down-circle.png';
import starImg from '../images/star-circle.png';
import analyticsImg from '../images/analyticsImage.png';

const moment = require('moment');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  text: {
    fontFamily: 'Futura',
    fontSize: 20,
    fontWeight: 'bold',
    fontStyle: 'normal',
    letterSpacing: 0,
    color: '#DCE0E6',
  },
  unlocked: {
    fontFamily: 'Futura',
    fontSize: 15,
    fontWeight: 'bold',
    fontStyle: 'normal',
    letterSpacing: 0,
    color: '#FFEDA3',
  },
  achievement: {
    fontFamily: 'Futura',
    fontSize: 20,
    fontWeight: 'bold',
    fontStyle: 'normal',
    letterSpacing: 0,
    color: '#FFFFFF',
  },
  achievementWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 15,
    marginRight: 20,
    marginLeft: 120,
    backgroundColor: '#FC405B',
    borderRadius: 5,
  },
  plus: {
    fontFamily: 'Futura',
    fontSize: 20,
    fontWeight: 'bold',
    fontStyle: 'normal',
    letterSpacing: 0,
    color: '#00D6CC',
  },
  minus: {
    fontFamily: 'Futura',
    fontSize: 20,
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
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 10,
    marginLeft: 20,
    marginRight: 20,
  },
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
          <Image source={analyticsImg} style={{height: 90}}/>
        <ScrollView>
          {this.state.achievements.map(item => {
            if (item.val.type === 'plus') {
              return (
                <View key={item.key} style={styles.row}>
                  <Image source={arrowUpImg} />
                  <Text style={styles.text}>{moment(item.val.date).format('MM/DD')} </Text>
                  <Text style={styles.plus}>+{item.val.points} Points</Text>
                </View>
              );
            }
            if (item.val.type === 'minus') {
              return (
                <View key={item.key} style={styles.row}>
                  <Image source={arrowDownImg} />
                  <Text style={styles.text}>{moment(item.val.date).format('MM/DD')} </Text>
                  <Text style={styles.minus}>-{item.val.points} Points</Text>
                </View>
              );
            }
            if (item.val.type === 'achievement') {
              return (
                <View key={item.key}>
                  <View style={styles.row}>
                    <Image source={starImg} />
                    <Text style={styles.unlocked}>{'Achievement Unlocked!'}</Text>
                  </View>
                  <View style={styles.achievementWrapper}>
                    <Image source={achievementImg} style={{width: 50, height: 50}} />
                    <Text style={styles.achievement}>{item.val.title}</Text>
                  </View>
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
