import React from 'react';

import { createStackNavigator, DrawerActions } from 'react-navigation';
import { TouchableOpacity, Easing, Animated } from 'react-native';
import IOSIcon from 'react-native-vector-icons/Ionicons';
import SampleComponent from '../components/SampleComponent';
import SuccessRabbit from '../components/SuccessRabbit';

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
      // headerRight: (
      //   <TouchableOpacity onPress={DrawerActions.toggleDrawer}>
      //     <IOSIcon name="ios-menu" size={30} style={{ marginRight: 12 }} />
      //   </TouchableOpacity>
      // ),
      // headerStyle: { paddingRight: 10, paddingLeft: 10 },
    },
    transitionConfig: () => ({
      transitionSpec: {
        duration: 550,
        easing: Easing.out(Easing.poly(4)),
        timing: Animated.timing,
      },
    }),
  }
);

export default stackNav;
