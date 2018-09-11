import React, { Component } from 'react';
import { Text, View, Image, ScrollView, StatusBar } from 'react-native';
import { LineChart } from 'react-native-chart-kit';
import { app } from '../../db';
import achievementImg from '../images/achievement.png';
import arrowUpImg from '../images/arrow-up-circle.png';
import arrowDownImg from '../images/arrow-down-circle.png';
import starImg from '../images/star-circle.png';
import styles from '../css/styleForAnalytics';

const moment = require('moment');

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
      backgroundGradientFrom: '#3B495B',
      backgroundGradientTo: '#3B495B',
      color: () => `rgba(147,170,203, 1)`,
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
        <StatusBar barStyle="light-content" />
        <Text style={styles.headline}>Analytics</Text>
        <ScrollView showsVerticalScrollIndicator="false">
          <LineChart
            data={data}
            style={styles.lineChart}
            width={335}
            height={180}
            chartConfig={chartConfig}
            bezier
          />
          <View style={styles.verticalArrowLine} />
          <View style={styles.valuesWrapper}>
            {this.state.achievements.map(item => {
              if (item.val.type === 'plus') {
                return (
                  <View key={item.key} style={styles.row}>
                    <View style={{ flex: 1 }}>
                      <Image source={arrowUpImg} style={styles.arrowUpImg} />
                    </View>
                    <Text style={[styles.text, { flex: 3 }]}>
                      {moment(item.val.date).format('MM/DD')}{' '}
                    </Text>
                    <Text style={[styles.plusSign, { flex: 1 }]}>+</Text>
                    <Text style={[styles.plus, { flex: 3 }]}>{item.val.points} Points</Text>
                  </View>
                );
              }
              if (item.val.type === 'minus') {
                return (
                  <View key={item.key} style={styles.row}>
                    <View style={{ flex: 1 }}>
                      <Image source={arrowDownImg} style={styles.arrowDownImg} />
                    </View>
                    <Text style={[styles.text, { flex: 3 }]}>
                      {moment(item.val.date).format('MM/DD')}{' '}
                    </Text>
                    <Text style={[styles.minusSign, { flex: 1 }]}>−</Text>
                    <Text style={[styles.minus, { flex: 3 }]}>{item.val.points} Points</Text>
                  </View>
                );
              }
              if (item.val.type === 'achievement') {
                return (
                  <View key={item.key}>
                    <View style={styles.row} marginTop={10}>
                      <View style={{ flex: 1 }}>
                        <Image source={starImg} style={styles.starImg} />
                      </View>
                      <Text style={[styles.unlocked, { flex: 11 }]}>Achievement Unlocked!</Text>
                    </View>
                    <View style={styles.row} marginBottom={10}>
                      <View style={{ flex: 1 }} />
                      <View style={[styles.achievementWrapper, { flex: 12 }]}>
                        <Image source={achievementImg} style={styles.achievementImg} />
                        <Text style={styles.achievement}>{item.val.title}</Text>
                      </View>
                    </View>
                  </View>
                );
              }
            })}
          </View>
        </ScrollView>
      </View>
    );
  }
}

export default Analytics;
