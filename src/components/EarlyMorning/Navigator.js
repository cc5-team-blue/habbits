import { createSwitchNavigator } from 'react-navigation';

import Start from './Start';
import Success from './Success';
import BigSuccess from './BigSuccess';
import Fail from './Fail';
import Main from './Main';
import Loading from './Loading';
import CorrectTime from './CorrectTime';
import WrongTime from './WrongTime';

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
