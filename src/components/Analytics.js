import React, { Component } from 'react';
import { Text, View, Image, ScrollView, StatusBar, ActivityIndicator } from 'react-native';
import { LineChart } from 'react-native-chart-kit';
import { connect } from 'react-redux';
import { app } from '../../db';
import achievementImg from '../images/achievement.png';
import arrowUpImg from '../images/arrow-up-circle.png';
import arrowDownImg from '../images/arrow-down-circle.png';
import starImg from '../images/star-circle.png';
import styles from '../css/styleForAnalytics';
import Exit from './ExitButton';
import { widthRes, heightRes } from '../css/responsiveFunctions';

const moment = require('moment');

class Analytics extends Component {
  constructor() {
    super();
    this.state = {
      achievements: [],
      // To make it work in adroid, we need to set initial value in chart
      chart: [0, 1, 2, 3, 17],
      points: 0,
      count: 0,
    };
  }

  componentDidMount() {
    const { uid } = this.props;
    const db = app.database();
    const ref = db.ref(`users/${uid}/history`);
    const achievements = [];
    const chart = [];
    let points = 0;
    ref.once('value', data => {
      data.forEach(child => {
        const obj = {};
        obj.key = child.key;
        obj.val = child.val();
        achievements.push(obj);
        const reversedList = achievements.reverse();

        if (child.val().type === 'plus') {
          points += child.val().points;
          chart.push(Number(points));
        }

        if (child.val().type === 'minus') {
          points -= child.val().points;
          chart.push(Number(points));
        }

        this.setState({ reversedList, chart, points });
      });
    });
  }

  render() {
    const { chart, reversedList } = this.state;
    const chartConfig = {
      backgroundGradientFrom: '#3B495B',
      backgroundGradientTo: '#3B495B',
      color: () => `rgba(147,170,203, 1)`,
    };
    const data = {
      datasets: [
        {
          data: chart,
        },
      ],
    };
    if (JSON.stringify(chart) === JSON.stringify([0, 1, 2, 3, 17])) {
      return (
        <View style={styles.container}>
          <StatusBar barStyle="light-content" />
          <ActivityIndicator size="large" />
        </View>
      );
    }

    return (
      <View style={styles.container}>
        <StatusBar barStyle="light-content" />
        <View style={styles.headlineWrapper}>
          <Text style={styles.headline}>Analytics</Text>
          <Exit />
        </View>
        <ScrollView showsVerticalScrollIndicator={false}>
          <LineChart
            data={data}
            style={styles.lineChart}
            width={widthRes(335)}
            height={heightRes(180)}
            chartConfig={chartConfig}
            xAccessor={({ index }) => index}
            bezier
          />
          <View style={styles.valuesWrapper}>
            {reversedList.map(item => {
              if (item.val.type === 'plus') {
                return (
                  <View key={item.key} style={styles.row}>
                    <View style={styles.verticalArrowLine} />
                    <View style={{ flex: 1 }}>
                      <Image source={arrowUpImg} style={styles.arrowUpImg} />
                    </View>
                    <Text style={[styles.text, { flex: 2 }]}>
                      {moment(item.val.date).format('MM/DD')}
                    </Text>
                    <Text
                      style={[styles.text, styles.habbitDescription, styles.green, { flex: 4 }]}
                    >
                      {item.val.habbits}
                    </Text>
                    <Text style={[styles.plus, { flex: 1 }]}>+</Text>
                    <Text style={[styles.plus, { flex: 1 }]}>{item.val.points}</Text>
                  </View>
                );
              }
              if (item.val.type === 'minus') {
                return (
                  <View key={item.key} style={styles.row}>
                    <View style={styles.verticalArrowLine} />
                    <View style={{ flex: 1 }}>
                      <Image source={arrowDownImg} style={styles.arrowDownImg} />
                    </View>
                    <Text style={[styles.text, { flex: 2 }]}>
                      {moment(item.val.date).format('MM/DD')}
                    </Text>
                    <Text style={[styles.text, styles.habbitDescription, styles.red, { flex: 4 }]}>
                      {item.val.habbits}
                    </Text>
                    <Text style={[styles.minus, { flex: 1 }]}>−</Text>
                    <Text style={[styles.minus, { flex: 1 }]}>{item.val.points}</Text>
                  </View>
                );
              }
              if (item.val.type === 'achievement') {
                return (
                  <View key={item.key}>
                    <View style={styles.verticalArrowLine} />
                    <View style={styles.row} marginTop={heightRes(5)}>
                      <View style={{ flex: 1 }}>
                        <Image source={starImg} style={styles.starImg} />
                      </View>
                      <Text style={[styles.unlocked, { flex: 11 }]}>Achievement Unlocked!</Text>
                    </View>
                    <View style={styles.row} marginBottom={heightRes(10)}>
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

const mapStateToProps = state => ({
  uid: state.red.uid,
  name: state.red.name,
});

const mapDispatchToProps = dispatch => ({});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Analytics);
