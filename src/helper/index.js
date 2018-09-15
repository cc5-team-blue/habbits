// This is a helper function file
import { AsyncStorage } from 'react-native';
import moment from 'moment';
import 'moment-duration-format';

// import firebaseSDK from db
import { insert, push } from '../../db';

export const sayHi = () => {
  console.log("Don't do that");
};

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

// Using in JournalMainScreen.js
export const firebaseInsert = ({ greatful, til }) => {
  const date = new Date();
  insert(`users/1/habits/JournalHabbit/${date}`, { date, greatful, til });
};
