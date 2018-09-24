/* eslint no-unused-vars: "error" */
import { combineReducers } from 'redux';
import { AppState } from 'react-native';
import moment from 'moment';
// Do not remove this library.
import 'moment-duration-format';

import navReducer from './navReducer';
import {
  COUNTDOWN,
  CHANGE_INTERVAL,
  OFFLINECOUNTDOWN,
  APP_STATE_CHAGE,
  IS_CONNECTED_CHANGE,
  RESETOFFLINECOUNTDOWN,
  SET_END_TIME,
  SET_CURRENT_COUNTER,
  SAVE_NAME_TO_STORE,
  SAVE_UID_TO_STORE,
  SAVE_TIMES_TO_STORE,
  SET_JOURNAL_COUNT,
  SET_TOTAL_POINTS,
} from '../actions';

const initialState = {
  uid: '',
  name: 'Habbit',
  endTime: undefined,
  full: undefined,
  counter: undefined,
  isWorking: false,
  interval: undefined,
  offlineSeconds: 10,
  appState: AppState.currentState,
  isConnected: true,
  timerDuration: 0,
  journalData: false,
  mailAddress: undefined,
  earlyTimes: 0,
  journalCount: 0,
  totalPoints: 0,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case COUNTDOWN: {
      if (state.counter > 0) {
        return {
          ...state,
          counter: state.counter.subtract(1, 'seconds'),
          timerDuration: state.timerDuration + 1,
          isWorking: true,
        };
      }
      return {
        ...state,
        interval: clearInterval(state.interval),
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
    case RESETOFFLINECOUNTDOWN: {
      return {
        ...state,
        offlineSeconds: 10,
      };
    }
    case APP_STATE_CHAGE: {
      return {
        ...state,
        appState: action.nextAppState,
      };
    }
    case IS_CONNECTED_CHANGE: {
      return {
        ...state,
        isConnected: action.isConnected,
      };
    }
    case SET_END_TIME: {
      const end = moment(action.endTime);
      const currentTime = moment();
      const remainingTime = end.diff(currentTime, 'seconds');
      const count = moment.duration({ seconds: remainingTime });
      return {
        ...state,
        endTime: action.endTime,
        full: count,
        counter: count,
      };
    }
    case SET_CURRENT_COUNTER: {
      return {
        ...state,
        counter: action.counter,
      };
    }
    case SAVE_NAME_TO_STORE: {
      return {
        ...state,
        name: action.name,
      };
    }
    case SAVE_UID_TO_STORE: {
      return {
        ...state,
        uid: action.uid,
      };
    }
    case SAVE_TIMES_TO_STORE: {
      return {
        ...state,
        earlyTimes: action.clickTime,
      };
    }
    case SET_JOURNAL_COUNT: {
      return {
        ...state,
        journalCount: action.count,
      };
    }
    case SET_TOTAL_POINTS: {
      return {
        ...state,
        totalPoints: action.points,
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
