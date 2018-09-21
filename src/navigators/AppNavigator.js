import React from 'react';
import { Dimensions } from 'react-native';
import { connect } from 'react-redux';
// eslint-disable-next-line import/no-extraneous-dependencies
import Icon from 'react-native-vector-icons/FontAwesome';

import { createDrawerNavigator } from 'react-navigation';
import {
  reduxifyNavigator,
  createReactNavigationReduxMiddleware,
} from 'react-navigation-redux-helpers';

import swichNav from './SwitchNavigator';
import UserInfo from '../components/UserInfo';
import Analytics from '../components/Analytics';

import Sidemenu from './StyledNavigator';

const middleware = createReactNavigationReduxMiddleware('root', state => state.nav);

const { width, height } = Dimensions.get('window');

const RootNavigator = createDrawerNavigator(
  {
    Home: {
      screen: swichNav,
      navigationOptions: {
        drawerLabel: 'home page',
        drawerIcon: () => <Icon name="rocket" size={24} />,
      },
    },
    UserInfo: {
      screen: UserInfo,
      navigationOptions: {
        drawerLabel: 'Log Out',
        drawerIcon: () => <Icon name="rocket" size={24} />,
      },
    },
    Analytics: {
      screen: Analytics,
      navigationOptions: {
        drawerLabel: 'Analytics',
        drawerIcon: () => <Icon name="rocket" size={24} />,
      },
    },
  },
  {
    initialRouteName: 'Home',
    contentComponent: Sidemenu,
    drawerPosition: 'left',
    drawerWidth: Math.min(height, width) * 0.6,
    drawerBackgroundColor: '#EB5E65',
  }
);

// AppWithNavigationState and mapStateToProps is like middleware for connecting component to navigation
// So please do not modify these two.
const AppWithNavigationState = reduxifyNavigator(RootNavigator, 'root');

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
export { RootNavigator, AppNavigator, middleware };
