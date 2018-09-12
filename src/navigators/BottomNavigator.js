import React from 'react';
import { Dimensions } from 'react-native';
import { connect } from 'react-redux';
import Ionicons from 'react-native-vector-icons/Ionicons';

import { createBottomTabNavigator } from 'react-navigation';
import {
  reduxifyNavigator,
  createReactNavigationReduxMiddleware,
} from 'react-navigation-redux-helpers';

import stackNav from './StackNavigator';
import UserInfo from '../components/UserInfo';
import Analytics from '../components/Analytics';
import SampleComponent from '../components/SampleComponent';
import AppStateExample from '../components/trackComponent';

const middleware = createReactNavigationReduxMiddleware('root', state => state.nav);

const BottomNavigator = createBottomTabNavigator(
  {
    Home: stackNav,
    Analytics,
    'User Info': UserInfo,
  },
  {
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, tintColor }) => {
        const { routeName } = navigation.state;
        let iconName;
        if (routeName === 'Home') {
          iconName = `ios-home${focused ? '' : '-outline'}`;
        } else if (routeName === 'Analytics') {
          iconName = `ios-analytics${focused ? '' : '-outline'}`;
        } else if (routeName === 'User Info') {
          iconName = `ios-contact${focused ? '' : '-outline'}`;
        }

        // You can return any component that you like here! We usually use an
        // icon component from react-native-vector-icons
        return <Ionicons name={iconName} size={25} color={tintColor} />;
      },
    }),
    tabBarOptions: {
      activeTintColor: 'tomato',
      inactiveTintColor: 'gray',
    },
  }
);

// AppWithNavigationState and mapStateToProps is like middleware for connecting component to navigation
// So please do not modify these two.
const AppWithNavigationState = reduxifyNavigator(BottomNavigator, 'root');

const mapStateToProps = state => ({
  state: state.nav,
});

const AppNavigator = connect(
  mapStateToProps,
  null
)(AppWithNavigationState);
// RootNavigator: It describes the all pages in app
// AppNavigator: It shows the root component with all state.
// middleware: it is going to be used to pass nav props to redux.
export { BottomNavigator, AppNavigator, middleware };
