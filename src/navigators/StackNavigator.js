import { createStackNavigator } from 'react-navigation';
import { Easing, Animated } from 'react-native';
import SampleComponent from '../components/SampleComponent';
import SuccessRabbit from '../components/SuccessRabbit';
import OfflineCountdown from '../components/offlineCountdown';
import OfflineRabbit from '../components/offlineRabbit';

// Here is the place we define app's pages with name
// For example, Main page have reference to SampleComponent.
const stackNav = createStackNavigator(
  {
    Main: { screen: SampleComponent },
    Success: { screen: SuccessRabbit },
    OffLine: { screen: OfflineCountdown },
    OffLineRabbit: { screen: OfflineRabbit },
  },
  {
    headerMode: 'none',
    mode: 'modal',
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

export default stackNav;
