// It gets action types
import { SOME_ACTION_HERE, ANOTHER_ACTION, SET_USER, SET_EMAIL, SET_PASSWORD } from '../actions';

// It sets initial state
const initialState = {
  sampleData1: 'tsuyoshi',
  sampleData2: 'hiro',
  sampleData3: 'ノエル',
  sampleData4: 'マイケル',
  user: null,
  loading: true,
  email: 'ka098@gmail.com',
  password: 'asdfa',
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
    case SET_USER: {
      return {
        ...state,
        user: action.user,
        loading: action.loading,
      };
    }
    case SET_EMAIL: {
      return {
        ...state,
        email: action.email,
      };
    }
    case SET_PASSWORD: {
      return {
        ...state,
        password: action.password,
      };
    }
    default: {
      return state;
    }
  }
};

export default reducer;
