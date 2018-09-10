import React from 'react';
import { Dimensions } from 'react-native';
import { connect } from 'react-redux';
import Icon from 'react-native-vector-icons/FontAwesome';

import { createDrawerNavigator } from 'react-navigation';
import {
  reduxifyNavigator,
  createReactNavigationReduxMiddleware,
} from 'react-navigation-redux-helpers';

import stackNav from './StackNavigator';
import UserInfo from '../components/UserInfo';
import AppStateExample from '../components/trackComponent';

const middleware = createReactNavigationReduxMiddleware('root', state => state.nav);

const { width, height } = Dimensions.get('window');

const RootNavigator = createDrawerNavigator(
  {
    Home: {
      screen: stackNav,
      navigationOptions: {
        drawerLabel: 'home page',
        drawerIcon: () => <Icon name="rocket" size={24} />,
      },
    },
    UserInfo: {
      screen: UserInfo,
      navigationOptions: {
        drawerLabel: 'user page',
        drawerIcon: () => <Icon name="rocket" size={24} />,
      },
    },
    TrackPage: {
      screen: AppStateExample,
      navigationOptions: {
        drawerLabel: 'track example',
        drawerIcon: () => <Icon name="rocket" size={24} />,
      },
    },
  },
  {
    drawerPosition: 'left',
    drawerWidth: Math.min(height, width) * 0.8,
    drawerBackgroundColor: '#e3e1ed',
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
