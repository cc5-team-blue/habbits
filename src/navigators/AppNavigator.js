import React from 'react';
import { connect } from 'react-redux';
import Icon from 'react-native-vector-icons/FontAwesome';

import { createDrawerNavigator } from 'react-navigation';
import {
  reduxifyNavigator,
  createReactNavigationReduxMiddleware,
} from 'react-navigation-redux-helpers';

import stackNav from './StackNavigator';

const middleware = createReactNavigationReduxMiddleware('root', state => state.nav);

// Here is the place we set app's pages with name
// For example, Main page have reference to SampleComponent.
const RootNavigator = createDrawerNavigator({
  Main: {
    screen: stackNav,
    navigationOptions: {
      drawerLabel: 'Home',
      drawerIcon: ({ tintColor }) => <Icon name="rocket" size={24} style={tintColor} />,
    },
  },
});

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
