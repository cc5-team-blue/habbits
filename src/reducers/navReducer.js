import { NavigationActions } from 'react-navigation';
import { RootNavigator } from '../navigators/AppNavigator';

const { router } = RootNavigator;
const initalAction = router.getActionForPathAndParams('Home');
const initialState = router.getStateForAction(initalAction);

const navReducer = (state = initialState, action) => {
  let nextState;

  switch (action.type) {
    case 'Home':
      nextState = router.getStateForAction(
        NavigationActions.navigate({ routeName: 'Home' }),
        state
      );
      break;
    default:
      nextState = router.getStateForAction(action, state);
      break;
  }

  return nextState || state;
};

export default navReducer;
