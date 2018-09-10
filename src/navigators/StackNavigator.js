import { createStackNavigator } from 'react-navigation';
import { Easing, Animated } from 'react-native';
import IOSIcon from 'react-native-vector-icons/Ionicons';
import SampleComponent from '../components/SampleComponent';
import SuccessRabbit from '../components/SuccessRabbit';

// Here is the place we define app's pages with name
// For example, Main page have reference to SampleComponent.
const stackNav = createStackNavigator(
  {
    Main: { screen: SampleComponent },
    Success: { screen: SuccessRabbit },
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
