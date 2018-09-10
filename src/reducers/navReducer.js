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
    case 'UserInfo':
      nextState = router.getStateForAction(
        NavigationActions.navigate({ routeName: 'UserInfo' }),
        state
      );
      break;
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
