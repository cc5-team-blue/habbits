import React, { Component } from 'react';
import firebase from 'react-native-firebase';

import { Text, View, Image, StatusBar, ScrollView, Alert, AsyncStorage } from 'react-native';
import { connect } from 'react-redux';
import { NavigationActions } from 'react-navigation';
import { updateConnectivity, setJournalCount, setTotalPoints } from '../actions';
import sleepHabbitImg from '../images/rabbitSmall.png';
import earlyStartImg from '../images/earlyStart.png';
import analyticsImage from '../images/analyticsImage.png';
import journalImage from '../images/journalImage.png';
import styles from '../css/styleForMain';
import Drawer from './Drawer';
import { app } from '../../db';

import TrackComponent from './trackComponent';

class Main extends Component {
  async componentDidMount() {
    const { uid, getTotalPointsFromFB } = this.props;
    this.checkPermission();
    this.createNotificationListeners();
    getTotalPointsFromFB(uid);
  }

  // Remove listeners allocated in createNotificationListeners()
  componentWillUnmount() {
    this.notificationListener();
    this.notificationOpenedListener();
  }

  checkPermission = async () => {
    const enabled = await firebase.messaging().hasPermission();
    try {
      if (enabled) {
        this.getToken();
      } else {
        this.requestPermission();
      }
    } catch (e) {
      console.log(e);
    }
  };

  getToken = async () => {
    try {
      let fcmToken = await AsyncStorage.getItem('fcmToken');
      if (!fcmToken) {
        fcmToken = await firebase.messaging().getToken();
        if (fcmToken) {
          // user has a device token
          await AsyncStorage.setItem('fcmToken', fcmToken);
        }
      }
    } catch (e) {
      console.log(e);
    }
  };

  requestPermission = async () => {
    try {
      await firebase.messaging().requestPermission();
      // User has authorised
      this.getToken();
    } catch (e) {
      // User has rejected permissions
      console.log('permission rejected');
    }
  };

  async createNotificationListeners() {
    // Triggered when a particular notification has been received in foreground
    this.notificationListener = firebase.notifications().onNotification(notification => {
      const { title, body } = notification;
      const { showAlert } = this.props;
      showAlert(title, body);
    });

    // If your app is in background, you can listen for when a notification is clicked / tapped / opened as follows:
    this.notificationOpenedListener = firebase
      .notifications()
      .onNotificationOpened(notificationOpen => {
        const { title, body } = notificationOpen.notification;
        const { showAlert } = this.props;
        showAlert(title, body);
      });

    // If your app is closed,
    // you can check if it was opened by a notification being clicked / tapped / opened as follows:
    const notificationOpen = await firebase.notifications().getInitialNotification();
    if (notificationOpen) {
      const { title, body } = notificationOpen.notification;
      const { showAlert } = this.props;
      showAlert(title, body);
    }

    // Triggered for data only payload in foreground
    this.messageListener = firebase.messaging().onMessage(message => {
      console.log(JSON.stringify(message));
    });
  }

  render() {
    const {
      clickHabbit,
      achievements,
      goToAnalytics,
      goToJournal,
      goToEarlyMorning,
      uid,
      name,
    } = this.props;
    return (
      <View style={styles.container}>
        <StatusBar barStyle="light-content" translucent />
        <TrackComponent />
        <View style={{ marginTop: -10 }}>
          <Drawer />
          <Text style={styles.headline}>Good Evening {name}</Text>
        </View>
        <ScrollView>
          <View style={styles.wrapper}>
            <View style={styles.row}>
              <View style={styles.item}>
                <View
                  onTouchEnd={clickHabbit}
                  style={[styles.habbitWrapper, styles.left, { backgroundColor: '#eb5e65' }]}
                >
                  <Image style={styles.sleepHabbitImage} source={sleepHabbitImg} />
                </View>
                <View onTouchEnd={clickHabbit} style={[styles.habbitTextBar, styles.left]}>
                  <Text style={styles.habbitText}>Good Sleep</Text>
                </View>
              </View>
              <View style={styles.item} onTouchEnd={goToEarlyMorning}>
                <View style={[styles.habbitWrapper, styles.right]}>
                  <Image style={styles.earlyStartImg} source={earlyStartImg} />
                </View>
                <View style={[styles.habbitTextBar, styles.right]}>
                  <Text style={styles.habbitText}>Early Start</Text>
                </View>
              </View>
            </View>
            <View style={[styles.row, { paddingTop: 15 }]}>
              <View style={styles.item} onTouchEnd={() => goToJournal(uid)}>
                <View style={[styles.habbitWrapper, styles.left, { backgroundColor: '#FFB94E' }]}>
                  <Image style={styles.journalHabbitImage} source={journalImage} />
                </View>
                <View style={[styles.habbitTextBar, styles.left]}>
                  <Text style={styles.habbitText}>Daily Journal</Text>
                </View>
              </View>
              <View style={styles.item}>
                <View
                  onTouchEnd={goToAnalytics}
                  style={[styles.habbitWrapper, styles.right, { backgroundColor: '#576371' }]}
                >
                  <Image style={styles.analyticsImage} source={analyticsImage} />
                </View>
                <View
                  onTouchEnd={goToAnalytics}
                  style={[styles.habbitTextBar, styles.right, { backgroundColor: '#6F829D' }]}
                >
                  <Text style={styles.habbitText}>Analytics</Text>
                </View>
              </View>
            </View>
            <View style={styles.achievements}>
              <Text style={styles.achievementsText}>Recent Achievements</Text>
              <View style={styles.achievementsIconContainer}>
                {achievements.map((_, i) => (
                  <View key={String(i)} style={styles.achievementsIcon} />
                ))}
              </View>
            </View>
          </View>
        </ScrollView>
      </View>
    );
  }
}

const mapStateToProps = state => ({
  state: state.nav,
  achievements: ['streak', 'none', 'none', 'none', 'none', 'none', 'none', 'none'],
  name: state.red.name,
  uid: state.red.uid,
  redirect: false,
});

const mapDispatchToProps = dispatch => ({
  clickHabbit: () => {
    dispatch(NavigationActions.navigate({ routeName: 'OffLine' }));
  },
  goToAnalytics: () => {
    dispatch(NavigationActions.navigate({ routeName: 'Analytics' }));
  },
  showAlert: (title, body) => {
    Alert.alert(title, body, [{ text: 'OK', onPress: () => console.log('OK Pressed') }], {
      cancelable: false,
    });
  },
  updateConnect: newConnectionState => {
    dispatch(updateConnectivity(newConnectionState));
  },
  getTotalPointsFromFB: async uid => {
    const path = `users/${uid}/totalPoints`;
    const fbPoints = await app.database().ref(path);
    fbPoints.once('value', data => {
      const points = data.val();
      dispatch(setTotalPoints(points));
    });
  },
  goToJournal: async uid => {
    const path = `users/${uid}/habits/JournalHabbit/info`;
    const info = await app.database().ref(path);
    info.once('value', data => {
      const response = data.val();
      if (!response) {
        dispatch(NavigationActions.navigate({ routeName: 'JournalDescription' }));
      } else {
        const { isActive, lastUpdate, counter } = data.val();
        dispatch(setJournalCount(counter));
        const currentTime = Date.now();
        // check if Daily Journal is Active or not
        if (!isActive || !lastUpdate) {
          dispatch(NavigationActions.navigate({ routeName: 'JournalDescription' }));
        } // check if second time in same day(less than 14 hours) or not
        else if (currentTime - lastUpdate < 50400000) {
          dispatch(NavigationActions.navigate({ routeName: 'JournalSuccess' }));
        } // check if user write journal daily(less than 30 hours) or not
        else if (currentTime - lastUpdate < 108000000) {
          dispatch(NavigationActions.navigate({ routeName: 'JournalMainScreen' }));
        } // check if user didn't write journal within 30 hours
        else if (currentTime - lastUpdate > 108000000) {
          dispatch(NavigationActions.navigate({ routeName: 'JournalFailure' }));
        }
      }
    });
  },
  goToEarlyMorning: () => {
    dispatch(NavigationActions.navigate({ routeName: 'EarlyLoading' }));
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Main);
