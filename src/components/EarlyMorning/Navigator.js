import { createSwitchNavigator } from 'react-navigation';

import Start from './Start';
import Success from './Success';
import BigSuccess from './BigSuccess';
import Fail from './Fail';
import Main from './Main';

const EarlyMorningNavigator = createSwitchNavigator(
  {
    Start,
    Success,
    BigSuccess,
    Fail,
    Main,
  },
  {
    initialRouteName: 'Start',
  }
);

export default EarlyMorningNavigator;
