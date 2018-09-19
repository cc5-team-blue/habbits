// This is a helper function file
import { AsyncStorage } from 'react-native';
import moment from 'moment';
import 'moment-duration-format';

// import firebaseSDK from db
import { update, select } from '../../db';

// Using in CountdownToOffline.js
export const setEndTimer = async time => {
  try {
    await AsyncStorage.setItem('endTime', time);
  } catch (err) {
    console.log(err);
  }
};

// Loading.js
export const isLoggedIn = async () => {
  try {
    const items = await AsyncStorage.getItem('isLoggedIn');
    return items;
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
};

// Using in Timer.js
export const removeEndTime = async () => {
  try {
    await AsyncStorage.removeItem('endTime', console.log('remove end time'));
  } catch (err) {
    console.log(err);
  }
};

// Using in JounalDescription
export const setStartAndEndDate = () => {
  const startDate = moment().format();
  const setDate = moment().add(30, 'd');
  const endDate = setDate.format();
  update('users/1/habits/JournalHabbit/', { isActive: true, startDate, endDate });
};

// Using in JournalMainScreen.js
export const firebaseInsert = ({ grateful, til, starRate }) => {
  const date = moment().format();
  update(`users/1/habits/JournalHabbit/journals/${date}`, {
    date,
    grateful,
    til,
    rating: starRate,
  });
};

// Using in Main.js
export const isJournalActive = () => console.log(select('users/1/habits/JournalHabbit/isActive'));

// Using in JournalSuccess.js
export const finishJournal = () => {
  update('users/1/habits/JournalHabbit', { isActive: false });
};
