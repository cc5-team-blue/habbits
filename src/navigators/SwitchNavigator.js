import { createSwitchNavigator } from 'react-navigation';
import { Easing, Animated } from 'react-native';
import Main from '../components/Main';
import Analytics from '../components/Analytics';
import SuccessRabbit from '../components/SuccessRabbit';
import CountdownToOffline from '../components/CountdownToOffline';
import Failure from '../components/Failure';
import TimerScreen from '../components/TimerScreen';

// Here is the place we define app's pages with name
// For example, Main page have reference to SampleComponent.
const switchNav = createSwitchNavigator(
  {
    Main: { screen: Main },
    Success: { screen: SuccessRabbit },
    OffLine: { screen: CountdownToOffline },
    OffLineRabbit: { screen: Failure },
    TimerScreen: { screen: TimerScreen },
    Analytics: { screen: Analytics },
  },
  {
    headerMode: 'none',
    mode: 'modal',
    initialRouteName: 'Main',
    navigationOptions: {
      gesturesEnabled: false,
    },
    transitionConfig: () => ({
      transitionSpec: {
        duration: 510,
        easing: Easing.out(Easing.poly(4)),
        timing: Animated.timing,
      },
    }),
  }
);

export default switchNav;
