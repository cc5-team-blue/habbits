import { createSwitchNavigator } from 'react-navigation';

import Start from './Start';
import Success from './Success';
import BigSuccess from './BigSuccess';
import Fail from './Fail';
import Main from './Main';
import Loading from './Loading';

const EarlyMorningNavigator = createSwitchNavigator(
  {
    Start,
    Success,
    BigSuccess,
    Fail,
    Main,
    Loading,
  },
  {
    initialRouteName: 'Loading',
  }
);

export default EarlyMorningNavigator;
