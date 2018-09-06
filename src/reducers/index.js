// It gets action types
import { SOME_ACTION_HERE, ANOTHER_ACTION, CLICKED_RABBIT } from '../actions';

// It sets initial state
const initialState = {
  sampleData1: 'tsuyoshi',
  sampleData2: 'hiro',
  sampleData3: 'ノエル',
  sampleData4: 'マイケル',
  isClickedRabbit: false,
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
    case CLICKED_RABBIT: {
      return {
        ...state,
        isClickedRabbit: action.isClicked,
      };
    }
    default: {
      return state;
    }
  }
};

export default reducer;
