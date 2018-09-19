import { createSwitchNavigator } from 'react-navigation';

import Loading from '../auth/Loading';
import Login from '../auth/Login';
import Main from '../components/Main';
import SignUp from '../auth/SignUp';

const AuthNavigator = createSwitchNavigator(
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

export default AuthNavigator;
