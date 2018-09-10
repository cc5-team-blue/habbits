import { combineReducers } from 'redux';
// It gets action types
import moment from 'moment';
import momentDurationFormatSetup from 'moment-duration-format';
import navReducer from './navReducer';
import {
  SOME_ACTION_HERE,
  ANOTHER_ACTION,
  COUNTDOWN,
  CHANGE_INTERVAL,
  OFFLINECOUNTDOWN,
} from '../actions';

// It sets initial state
const initialState = {
  sampleData1: 'tsuyoshi',
  sampleData2: 'hiro',
  sampleData3: 'ノエル',
  sampleData4: 'マイケル',
  full: moment.duration({ seconds: 15, minutes: 50, hours: 0 }),
  counter: moment.duration({ seconds: 15, minutes: 50, hours: 2 }),
  isWorking: false,
  interval: undefined,
  timerDuration: 0,
  offlineSeconds: 15,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SOME_ACTION_HERE: {
      return {
        ...state,
        sampleData3: action.data,
      };
    }
    case ANOTHER_ACTION: {
      return {
        ...state,
        sampleData4: action.data,
      };
    }
    case COUNTDOWN: {
      return {
        ...state,
        counter: state.counter.subtract(1, 'seconds'),
        timerDuration: state.timerDuration + 1,
        // isWorking: true,
      };
    }
    case CHANGE_INTERVAL: {
      return {
        ...state,
        interval: action.data,
      };
    }
    case OFFLINECOUNTDOWN: {
      if (state.offlineSeconds > 0) {
        return {
          ...state,
          offlineSeconds: state.offlineSeconds - 1,
        };
      }
      return {
        ...state,
      };
    }
    default: {
      return state;
    }
  }
};

export default combineReducers({
  nav: navReducer,
  red: reducer,
});
