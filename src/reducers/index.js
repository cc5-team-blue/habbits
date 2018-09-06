// It gets action types
import { SOME_ACTION_HERE, ANOTHER_ACTION, SET_USER } from '../actions';

// It sets initial state
const initialState = {
  sampleData1: 'tsuyoshi',
  sampleData2: 'hiro',
  sampleData3: 'ノエル',
  sampleData4: 'マイケル',
  user: null,
  loading: true,
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
    default: {
      return state;
    }
  }
};

export default reducer;
