import { combineReducers } from 'redux';
import { AppState } from 'react-native';
// It gets action types
import moment from 'moment';
import navReducer from './navReducer';
import {
  SOME_ACTION_HERE,
  ANOTHER_ACTION,
  COUNTDOWN,
  CHANGE_INTERVAL,
  OFFLINECOUNTDOWN,
  APP_STATE_CHAGE,
  IS_CONNECTED_CHANGE,
} from '../actions';

// It sets initial state
const initialState = {
  sampleData1: 'tsuyoshi',
  sampleData2: 'hiro',
  sampleData3: 'ノエル',
  sampleData4: 'マイケル',
  full: moment.duration({ seconds: 15, minutes: 0, hours: 0 }),
  counter: moment.duration({ seconds: 15, minutes: 0, hours: 0 }),
  isWorking: false,
  interval: undefined,
  offlineSeconds: 3,
  appState: AppState.currentState,
  isConnected: true,
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
      console.log(state.counter);
      return {
        ...state,
        counter: action.data,
        isWorking: true,
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
    default: {
      return state;
    }
  }
};

export default combineReducers({
  nav: navReducer,
  red: reducer,
});
