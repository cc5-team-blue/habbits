// This is a helper function file
import { AsyncStorage } from 'react-native';
import moment from 'moment';
import 'moment-duration-format';

// import firebaseSDK from db
import { update, select } from '../../db';

// Using in Timer.js
export const setEndTimer = async time => {
  try {
    await AsyncStorage.setItem('endTime', time);
  } catch (err) {
    console.log(err);
  }
};

// Using in Timer.js
export const retrieveEndTime = async () => {
  try {
    const endTime = await AsyncStorage.getItem('endTime');
    if (endTime !== null) {
      const end = moment(endTime);
      const currentTime = moment();
      const remainingTime = end.diff(currentTime, 'seconds');
      const count = moment.duration({ seconds: remainingTime });
      console.log(count);
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

// Using in Main.js
export const isJournalActive = () => console.log(select('users/1/habits/JournalHabbit/isActive'));

// Using in JounalDescription
export const setStartAndEndDate = () => {
  const startDate = moment().format();
  const setDate = moment().add(30, 'd');
  const endDate = setDate.format();
  update('users/1/habits/JournalHabbit/', { isActive: true, startDate, endDate });
};

// Using in JournalMainScreen.js
export const firebaseInsert = ({ greatful, til }) => {
  const date = moment().format();
  update(`users/1/habits/JournalHabbit/journals/${date}`, { date, greatful, til });
};

// Using in JournalSuccess.js
export const finishJournal = () => {
  update('users/1/habits/JournalHabbit', { isActive: false });
};
