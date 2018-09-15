import React from 'react';
import { Text, View, Image, StatusBar, ScrollView } from 'react-native';
import { connect } from 'react-redux';
import { NavigationActions } from 'react-navigation';
import sleepHabbitImg from '../images/rabbitSmall.png';
import earlyStartImg from '../images/earlyStart.png';
import analyticsImage from '../images/analyticsImage.png';
import journalImage from '../images/journalImage.png';
import styles from '../css/styleForMain';
import Drawer from './Drawer';

export const Main = ({ clickHabbit, goToAnalytics, achievements }) => (
  <View style={styles.container}>
    <StatusBar barStyle="light-content" />
    <Drawer />
    <Text style={styles.headline}>Good Evening {'Habbits'}</Text>{' '}
    <ScrollView>
      <View style={styles.wrapper}>
        <View style={styles.row}>
          <View style={styles.item}>
            <View
              onTouchStart={clickHabbit}
              style={[styles.habbitWrapper, styles.left, { backgroundColor: '#eb5e65' }]}
            >
              <Image style={styles.sleepHabbitImage} source={sleepHabbitImg} />{' '}
            </View>{' '}
            <View onTouchStart={clickHabbit} style={[styles.habbitTextBar, styles.left]}>
              <Text style={styles.habbitText}>Good Sleep</Text>{' '}
            </View>{' '}
          </View>
          <View style={styles.item}>
            <View onTouchStart={clickHabbit} style={[styles.habbitWrapper, styles.right]}>
              <Image style={styles.earlyStartImg} source={earlyStartImg} />{' '}
            </View>{' '}
            <View onTouchStart={clickHabbit} style={[styles.habbitTextBar, styles.right]}>
              <Text style={styles.habbitText}>Early Start</Text>{' '}
            </View>{' '}
          </View>
        </View>
        <View style={[styles.row, { paddingTop: 15 }]}>
          <View style={styles.item}>
            <View
              onTouchStart={clickHabbit}
              style={[styles.habbitWrapper, styles.left, { backgroundColor: '#FFB94E' }]}
            >
              <Image style={styles.journalHabbitImage} source={journalImage} />{' '}
            </View>{' '}
            <View onTouchStart={clickHabbit} style={[styles.habbitTextBar, styles.left]}>
              <Text style={styles.habbitText}>Daily Journal</Text>{' '}
            </View>{' '}
          </View>
          <View style={styles.item}>
            <View
              onTouchStart={goToAnalytics}
              style={[styles.habbitWrapper, styles.right, { backgroundColor: '#576371' }]}
            >
              <Image style={styles.analyticsImage} source={analyticsImage} />{' '}
            </View>{' '}
            <View
              onTouchStart={goToAnalytics}
              style={[styles.habbitTextBar, styles.right, { backgroundColor: '#6F829D' }]}
            >
              <Text style={styles.habbitText}>Analytics</Text>{' '}
            </View>{' '}
          </View>
        </View>
        <View style={styles.achievements}>
          <Text style={styles.achievementsText}>Recent Achievements</Text>
          <View style={styles.achievementsIconContainer}>
            {achievements.map(() => (
              <View style={styles.achievementsIcon} />
            ))}
          </View>
        </View>
      </View>{' '}
    </ScrollView>
  </View>
);

const mapStateToProps = state => ({
  state: state.nav,
  achievements: ['streak', 'none', 'none', 'none', 'none', 'none', 'none', 'none'],
});

const mapDispatchToProps = dispatch => ({
  clickHabbit: () => {
    dispatch(NavigationActions.navigate({ routeName: 'OffLine' }));
  },
  goToAnalytics: () => {
    dispatch(NavigationActions.navigate({ routeName: 'Analytics' }));
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Main);
