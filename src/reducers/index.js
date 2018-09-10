import { combineReducers } from 'redux';
import navReducer from './navReducer';
// It gets action types
import moment from 'moment';
import momentDurationFormatSetup from 'moment-duration-format';
import { SOME_ACTION_HERE, ANOTHER_ACTION, COUNTDOWN, CHANGE_INTERVAL } from '../actions';

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
    default: {
      return state;
    }
  }
};

export default combineReducers({
  nav: navReducer,
  red: reducer,
});
