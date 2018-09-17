import { createSwitchNavigator } from 'react-navigation';

import Start from '../screens/Start';
import Success from '../screens/Success';
import BigSuccess from '../screens/BigSuccess';
import Fail from '../screens/Fail';
import Main from '../screens/Main';
import Loading from '../screens/Loading';
import CorrectTime from '../screens/CorrectTime';
import WrongTime from '../screens/WrongTime';

const EarlyMorningNavigator = createSwitchNavigator(
  {
    Start,
    Success,
    BigSuccess,
    Fail,
    Main,
    Loading,
    CorrectTime,
    WrongTime,
  },
  {
    initialRouteName: 'Loading',
  }
);

export default EarlyMorningNavigator;
