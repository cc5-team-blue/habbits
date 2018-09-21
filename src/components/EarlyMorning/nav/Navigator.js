import { createSwitchNavigator } from 'react-navigation';

import Start from '../screens/Start';
import Success from '../screens/Success';
import BigSuccess from '../screens/BigSuccess';
import Fail from '../screens/Fail';
import MainScreen from '../screens/Main';
import Loading from '../screens/Loading';
import CorrectTime from '../screens/CorrectTime';
import WrongTime from '../screens/WrongTime';
import Main from '../../Main';

const EarlyMorningNavigator = createSwitchNavigator(
  {
    Start,
    Success,
    BigSuccess,
    Fail,
    MainScreen,
    Loading,
    CorrectTime,
    WrongTime,
    Main,
  },
  {
    initialRouteName: 'Loading',
  }
);

export default EarlyMorningNavigator;
