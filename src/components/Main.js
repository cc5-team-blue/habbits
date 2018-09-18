import React, { Component } from 'react';
import firebase from 'react-native-firebase';

import {
  Text,
  View,
  Image,
  StatusBar,
  ScrollView,
  Alert,
  AsyncStorage,
  NetInfo,
} from 'react-native';
import { connect } from 'react-redux';
import { NavigationActions } from 'react-navigation';
import { setMailAddress, updateConnectivity } from '../actions';
import sleepHabbitImg from '../images/rabbitSmall.png';
import earlyStartImg from '../images/earlyStart.png';
import analyticsImage from '../images/analyticsImage.png';
import journalImage from '../images/journalImage.png';
import styles from '../css/styleForMain';
import Drawer from './Drawer';
import { app } from '../../db';

class Main extends Component {
  async componentDidMount() {
    this.checkPermission();
    this.createNotificationListeners();
    NetInfo.isConnected.addEventListener('connectionChange', this.handleConnectivityChange);
  }

  // 3

  // Remove listeners allocated in createNotificationListeners()
  componentWillUnmount() {
    this.notificationListener();
    this.notificationOpenedListener();
    NetInfo.isConnected.removeEventListener('connectionChange', this.handleConnectivityChange);
  }

  handleConnectivityChange = isConnected => {
    const { updateConnect } = this.props;
    if (isConnected) {
      updateConnect(isConnected);
    }
  };

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

  // 2
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
    /*
    * Triggered when a particular notification has been received in foreground
    * */
    this.notificationListener = firebase.notifications().onNotification(notification => {
      const { title, body } = notification;
      const { showAlert } = this.props;
      showAlert(title, body);
    });

    /*
    * If your app is in background, you can listen for when a notification is clicked / tapped / opened as follows:
    * */
    this.notificationOpenedListener = firebase
      .notifications()
      .onNotificationOpened(notificationOpen => {
        const { title, body } = notificationOpen.notification;
        const { showAlert } = this.props;
        showAlert(title, body);
      });

    /*
    * If your app is closed, 
    * you can check if it was opened by a notification being clicked / tapped / opened as follows:
    * */
    const notificationOpen = await firebase.notifications().getInitialNotification();
    if (notificationOpen) {
      const { title, body } = notificationOpen.notification;
      const { showAlert } = this.props;
      showAlert(title, body);
    }
    /*
    * Triggered for data only payload in foreground
    * */
    this.messageListener = firebase.messaging().onMessage(message => {
      // process data message
      console.log(JSON.stringify(message));
    });
  }

  render() {
    const { clickHabbit, achievements, goToAnalytics } = this.props;
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
});

const mapDispatchToProps = dispatch => ({
  clickHabbit: () => {
    dispatch(NavigationActions.navigate({ routeName: 'OffLine' }));
  },
  goToAnalytics: () => {
    dispatch(NavigationActions.navigate({ routeName: 'Analytics' }));
  },
  setMailToStore: () => {
    const { currentUser } = app.auth();
    dispatch(setMailAddress(currentUser.email));
  },

  showAlert: (title, body) => {
    Alert.alert(title, body, [{ text: 'OK', onPress: () => console.log('OK Pressed') }], {
      cancelable: false,
    });
  },
  updateConnect: newConnectionState => {
    dispatch(updateConnectivity(newConnectionState));
  },
  goToJournal: () => {
    app
      .database()
      .ref('users/1/habits/JournalHabbit/isActive')
      .on('value', data => {
        if (data.val()) {
          dispatch(NavigationActions.navigate({ routeName: 'JournalMainScreen' }));
        } else {
          dispatch(NavigationActions.navigate({ routeName: 'JournalDescription' }));
        }
      });
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Main);
