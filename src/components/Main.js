import React, { Component } from 'react';
import { Text, View, Image, StatusBar, ScrollView, NetInfo } from 'react-native';
import { connect } from 'react-redux';
import { NavigationActions } from 'react-navigation';
import { updateConnectivity } from '../actions';
import sleepHabbitImg from '../images/rabbitSmall.png';
import earlyStartImg from '../images/earlyStart.png';
import analyticsImage from '../images/analyticsImage.png';
import journalImage from '../images/journalImage.png';
import styles from '../css/styleForMain';
import Drawer from './Drawer';

class Main extends Component {
  componentDidMount() {
    console.log('mountend main page');
    NetInfo.isConnected.addEventListener('connectionChange', this.handleConnectivityChange);
  }

  componentWillUnmount() {
    const { isConnected } = this.props;
    console.log(isConnected);
    console.log('remove connection event');
    NetInfo.isConnected.removeEventListener('connectionChange', this.handleConnectivityChange);
  }

  handleConnectivityChange = isConnected => {
    const { updateConnect } = this.props;
    console.log('change happened', isConnected);
    updateConnect(isConnected);
  };

  render() {
    const { clickHabbit, goToAnalytics, achievements } = this.props;
    return (
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
  }
}

const mapStateToProps = state => ({
  state: state.nav,
  achievements: ['streak', 'none', 'none', 'none', 'none', 'none', 'none', 'none'],
  isConnected: state.red.isConnected,
});

const mapDispatchToProps = dispatch => ({
  clickHabbit: () => {
    setTimeout(() => {
      dispatch(NavigationActions.navigate({ routeName: 'OffLine' }));
    }, 200);

    // dispatch(NavigationActions.navigate({ routeName: 'OffLine' }));
  },
  goToAnalytics: () => {
    dispatch(NavigationActions.navigate({ routeName: 'Analytics' }));
  },
  updateConnect: newConnectionState => {
    dispatch(updateConnectivity(newConnectionState));
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Main);
