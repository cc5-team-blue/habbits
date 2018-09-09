import { NavigationActions } from 'react-navigation';
import { RootNavigator } from '../navigators/AppNavigator';

const { router } = RootNavigator;
const initalAction = router.getActionForPathAndParams('Main');
const initialState = router.getStateForAction(initalAction);

const navReducer = (state = initialState, action) => {
  let nextState;

  switch (action.type) {
    case 'Main':
      nextState = router.getStateForAction(
        NavigationActions.navigate({ routeName: 'Main' }),
        state
      );
      break;
    case 'Success':
      nextState = router.getStateForAction(
        NavigationActions.navigate({ routeName: 'Success' }),
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
