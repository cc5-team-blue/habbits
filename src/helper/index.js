// This is a helper function file
import { AsyncStorage } from 'react-native';
import moment from 'moment';

export const sayHi = () => {
  console.log("Don't do that");
  const currentTime = moment();
  console.log(currentTime);
  console.log(currentTime.subtract(3, 'hours').format('h:mm'));
};

// Using in Timer.js
export const setEndTimer = async () => {
  try {
    const endTime = moment().add(7, 'hours');
    await AsyncStorage.setItem('endTime', endTime);
  } catch (err) {
    console.log(err);
  }
};

// Using in Timer.js
export const retrieveEndTime = async () => {
  try {
    const someKey = await AsyncStorage.getItem('someKey');
    const endTime = await AsyncStorage.getItem('endTime');
    const dataset = [someKey, endTime];

    for (let i = 0; i < dataset.length; i++) {
      if (dataset[i] !== null) {
        console.log(dataset[i]);
      }
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