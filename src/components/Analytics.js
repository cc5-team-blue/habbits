import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, ScrollView, Dimensions } from 'react-native';
import { LineChart } from 'react-native-chart-kit';
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
    backgroundColor: '#3B495B',
  },
  text: {
    fontFamily: 'Futura',
    fontSize: 20,
    fontWeight: 'bold',
    fontStyle: 'normal',
    letterSpacing: 0,
    color: '#DCE0E6',
    marginLeft: 10,
  },
  unlocked: {
    fontFamily: 'Futura',
    fontSize: 15,
    fontWeight: 'bold',
    fontStyle: 'normal',
    letterSpacing: 0,
    color: '#FFEDA3',
    marginLeft: 10,
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
    marginRight: 30,
    marginLeft: 10,
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
      chart: [],
      points: 0,
      count: 0,
    };
  }

  componentDidMount() {
    const db = app.database();
    const ref = db.ref('users/0/achievements');
    const achievements = [];
    const chart = [];
    let points = 0;
    ref.on('value', data => {
      data.forEach(child => {
        const obj = {};
        obj.key = child.key;
        obj.val = child.val();
        achievements.push(obj);

        if (child.val().type === 'plus') {
          points += child.val().points;
          chart.push(Number(points));
        }

        if (child.val().type === 'minus') {
          points -= child.val().points;
          chart.push(Number(points));
        }

        this.setState({ achievements, chart, points });
      });
    });
  }

  render() {
    const chartConfig = {
      backgroundGradientFrom: '#39485C',
      backgroundGradientTo: '#39485C',
      color: (opacity = 1) => `rgba(144,169,204	, ${opacity})`,
    };
    const data = {
      datasets: [
        {
          data: this.state.chart,
        },
      ],
    };
    return (
      <View style={styles.container}>
        <Text style={styles.headline}>Analytics</Text>
        <LineChart
          data={data}
          width={Dimensions.get('window').width}
          height={220}
          chartConfig={chartConfig}
          bezier
        />
        <ScrollView>
          {this.state.achievements.map(item => {
            if (item.val.type === 'plus') {
              return (
                <View key={item.key} style={styles.row}>
                  <View style={{ flex: 1 }}>
                    <Image source={arrowUpImg} />
                  </View>
                  <Text style={[styles.text, { flex: 5 }]}>
                    {moment(item.val.date).format('MM/DD')}{' '}
                  </Text>
                  <Text style={[styles.plus, { flex: 5 }]}>+{item.val.points} Points</Text>
                </View>
              );
            }
            if (item.val.type === 'minus') {
              return (
                <View key={item.key} style={styles.row}>
                  <View style={{ flex: 1 }}>
                    <Image source={arrowDownImg} />
                  </View>
                  <Text style={[styles.text, { flex: 5 }]}>
                    {moment(item.val.date).format('MM/DD')}{' '}
                  </Text>
                  <Text style={[styles.minus, { flex: 5 }]}>-{item.val.points} Points</Text>
                </View>
              );
            }
            if (item.val.type === 'achievement') {
              return (
                <View key={item.key}>
                  <View style={styles.row}>
                    <View style={{ flex: 1 }}>
                      <Image source={starImg} />
                    </View>
                    <Text style={[styles.unlocked, { flex: 10 }]}>Achievement Unlocked!</Text>
                  </View>
                  <View style={styles.row}>
                    <View style={{ flex: 1 }} />
                    <View style={[styles.achievementWrapper, { flex: 10 }]}>
                      <Image source={achievementImg} style={{ width: 50, height: 50 }} />
                      <Text style={styles.achievement}>{item.val.title}</Text>
                    </View>
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
