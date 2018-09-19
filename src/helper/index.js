// This is a helper function file
import { AsyncStorage } from 'react-native';
import moment from 'moment';
import 'moment-duration-format';

// import firebaseSDK from db
import { app, update } from '../../db';

// Using in CountdownToOffline.js
export const setEndTimer = async time => {
  try {
    await AsyncStorage.setItem('endTime', time);
  } catch (err) {
    console.log(err);
  }
};

export const getAllKeyFromLS = async () => {
  try {
    const keys = await AsyncStorage.getAllKeys();
    return keys;
  } catch (err) {
    console.log(err);
  }
  return 0;
};

// Loading.js
export const isLoggedIn = async () => {
  try {
    const items = await AsyncStorage.getItem('isLoggedIn');
    // It return promise.
    return items;
  } catch (err) {
    console.log(err);
  }
  return 0;
};

// Loading.js
export const getNameFromLS = async () => {
  try {
    const name = await AsyncStorage.getItem('name');
    // It return promise.
    return name;
  } catch (err) {
    console.log(err);
  }
  return 0;
};

// Loading.js
export const getUidFromLS = async () => {
  try {
    const uid = await AsyncStorage.getItem('uid');
    // It return promise.
    return uid;
  } catch (err) {
    console.log(err);
  }
  return 0;
};

// SignUp.js
export const setSignupDataToLS = async (firstName, uid) => {
  try {
    await AsyncStorage.setItem('name', firstName);
    await AsyncStorage.setItem('uid', uid);
    await AsyncStorage.setItem('isLoggedIn', 'true');
    const loginStatus = await AsyncStorage.getItem('isLoggedIn');
    console.log('isLogin: ', loginStatus);
  } catch (err) {
    console.log(err);
  }
};

// logout helper
export const logout = async () => {
  try {
    await AsyncStorage.setItem('isLoggedIn', 'false');
    const loginStatus = await AsyncStorage.getItem('isLoggedIn');
    console.log('isLogin: ', loginStatus);
  } catch (err) {
    console.log(err);
  }
};

export const getItemFromLS = async () => {
  try {
    const items = await AsyncStorage.getItem('isLoggedIn');
    return items;
  } catch (err) {
    console.log(err);
  }
  return 0;
};

// Using in Timer.js
export const getDifference = async () => {
  try {
    const endTime = await AsyncStorage.getItem('endTime');
    if (endTime !== null) {
      const end = moment(endTime);
      const currentTime = moment();
      const remainingTime = end.diff(currentTime, 'HH:mm:ss');
      // const remainingTime = end.diff(currentTime, 'seconds');
      // ToDo: Make it work with 7h and render it conditionally:
      // if h > 0, show hh:mm
      // if h = 0, show mm:ss
      // const count = moment.duration({ seconds: remainingTime });
      return remainingTime;
    }
  } catch (err) {
    console.log(err);
  }
  return 0;
};

// Using in Timer.js
export const removeEndTime = async () => {
  try {
    await AsyncStorage.removeItem('endTime', console.log('remove end time'));
  } catch (err) {
    console.log(err);
  }
};

// Using in jounalDescription.js
export const setStartAndEndDate = uid => {
  const startDate = Date.now();
  const setDate = moment(startDate).add(30, 'd');
  const endDate = setDate.valueOf();
  update(`users/${uid}/habits/JournalHabbit/`, { isActive: true, startDate, endDate });
};

// Using in journalMainScreen.js
export const firebaseInsert = ({ grateful, til, starRate }, uid) => {
  const date = Date.now();
  update(`users/${uid}/habits/JournalHabbit/journals/${date}`, {
    date,
    grateful,
    til,
    rating: starRate,
  });
  update(`users/${uid}/habits/JournalHabbit/`, { lastUpdate: date });
};

// Using in journalSuccess.js
export const finishJournal = uid => {
  update(`users/${uid}/habits/JournalHabbit`, { isActive: false });
};

// Using in journalSuccessBIG.js
export const getJournalPoint = uid => {
  const path = `users/${uid}/history/`;
  const data = {
    date: Date.now(),
    points: 300,
    type: 'plus',
    habbits: 'Daily Journal',
  };
  app
    .database()
    .ref(path)
    .push(data);
};

// Using in journalFailure.js
export const loseJournalPoint = uid => {
  const path = `users/${uid}/history/`;
  const data = {
    date: Date.now(),
    points: 100,
    type: 'minus',
    habbits: 'Daily Journal',
  };
  app
    .database()
    .ref(path)
    .push(data);
};
