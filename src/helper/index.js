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
export const getPointsFromLS = async uid => {
  try {
    let points = await AsyncStorage.getItem('totalPoints');
    // It return promise. And totalPoints is JSONString.
    points = Number(JSON.parse(points)[uid]);
    const totalPointsLS = await AsyncStorage.getItem('totalPoints');
    console.log('Existing totalPoints: ', totalPointsLS);
    return points;
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

export const setTotalPointsToLS = async (points, uid) => {
  try {
    await AsyncStorage.mergeItem('totalPoints', JSON.stringify({ [uid]: points }));
  } catch (err) {
    console.log(err);
  }
};

// SignUp.js
export const setSignupDataToLS = async (firstName, uid) => {
  try {
    await AsyncStorage.setItem('name', firstName);
    await AsyncStorage.setItem('uid', uid);
    await AsyncStorage.setItem('isLoggedIn', 'true');
    await AsyncStorage.mergeItem('totalPoints', JSON.stringify({ [uid]: '0' }));
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
  // set start date as unix timestamp
  const startDate = Date.now();
  const setDate = moment(startDate).add(30, 'd');
  // set end date as unix timestamp
  const endDate = setDate.valueOf();
  update(`users/${uid}/habits/JournalHabbit/info/`, {
    isActive: true,
    startDate,
    endDate,
    counter: 0,
  });
};

// Using in journalMainScreen.js
export const firebaseInsert = ({ grateful, til, starRate, currentJournalCount }, uid) => {
  const date = Date.now();
  update(`users/${uid}/habits/JournalHabbit/journals/${date}`, {
    date,
    grateful,
    til,
    rating: starRate,
  });
  update(`users/${uid}/habits/JournalHabbit/info/`, {
    lastUpdate: date,
    counter: currentJournalCount + 1,
  });
};

// Using in journalSuccess.js
export const finishJournal = uid => {
  update(`users/${uid}/habits/JournalHabbit/info/`, { isActive: false });
};

const setPointsToLSAndFB = async (uid, data, newPoints) => {
  const path = `users/${uid}/history/`;
  const userRootPath = `users/${uid}/`;
  const database = await app.database();
  database.ref(path).push(data);
  database.ref(userRootPath).update({ totalPoints: newPoints });
  setTotalPointsToLS(String(newPoints), uid);
};

// Using in journalSuccessBIG.js
export const getJournalPoint = async (uid, newPoints) => {
  const data = {
    date: Date.now(),
    points: 5000,
    type: 'plus',
    habbits: 'Daily Journal',
  };
  setPointsToLSAndFB(uid, data, newPoints);
};

// Using in journalFailure.js
export const loseJournalPoint = async (uid, newPoints) => {
  const data = {
    date: Date.now(),
    points: 100,
    type: 'minus',
    habbits: 'Daily Journal',
  };
  setPointsToLSAndFB(uid, data, newPoints);
};

// Using in sleep habbit: SuccessRabbit.js
export const getSleepPoint = async (uid, newPoints) => {
  const data = {
    date: Date.now(),
    points: 150,
    type: 'plus',
    habbits: 'Good Sleep',
  };
  setPointsToLSAndFB(uid, data, newPoints);
};

// Using in sleep habbit: FailureMinus.js
export const loseSleepPoint = async (uid, newPoints) => {
  const data = {
    date: Date.now(),
    points: 200,
    type: 'minus',
    habbits: 'Good Sleep',
  };
  setPointsToLSAndFB(uid, data, newPoints);
};

// Using in Early Morning habbit: screens/Main.js
export const getEarlyMorningPoints = async (uid, newPoints) => {
  const data = {
    date: Date.now(),
    points: 300,
    type: 'plus',
    habbits: 'Early Morning',
  };
  setPointsToLSAndFB(uid, data, newPoints);
};

// Using in Early Morning habbit: screens/Main.js
export const loseEarlyMorningPoints = async (uid, newPoints) => {
  const data = {
    date: Date.now(),
    points: 100,
    type: 'minus',
    habbits: 'Early Morning',
  };
  setPointsToLSAndFB(uid, data, newPoints);
};
