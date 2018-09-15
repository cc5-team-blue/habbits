import { createSwitchNavigator } from 'react-navigation';

import Loading from '../auth/Loading';
import Login from '../auth/Login';
import Main from '../auth/Main';
import SignUp from '../auth/SignUp';

const MainNavigator = createSwitchNavigator(
  {
    Loading,
    SignUp,
    Login,
    Main,
  },
  {
    initialRouteName: 'Loading',
  }
);

export default MainNavigator;
