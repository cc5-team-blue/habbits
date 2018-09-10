import { connect } from 'react-redux';
import { createDrawerNavigator } from 'react-navigation';
import {
  reduxifyNavigator,
  createReactNavigationReduxMiddleware,
} from 'react-navigation-redux-helpers';

import SampleComponent from '../components/SampleComponent';
import SuccessRabbit from '../components/SuccessRabbit';

const middleware = createReactNavigationReduxMiddleware('root', state => state.nav);

// Here is the place we set app's pages with name
// For example, Main page have reference to SampleComponent.
const RootNavigator = createDrawerNavigator({
  Main: { screen: SampleComponent },
  Success: { screen: SuccessRabbit },
});

// AppWithNavigationState and mapStateToProps is like middleware for connecting component to navigation
// So please do not modify these two.
const AppWithNavigationState = reduxifyNavigator(RootNavigator, 'root');

const mapStateToProps = state => ({
  state: state.nav,
});

const AppNavigator = connect(mapStateToProps)(AppWithNavigationState);

// RootNavigator: It describes the all pages in app
// AppNavigator: It shows the root component with all state.
// middleware: it is going to be used to pass nav props to redux.
export { RootNavigator, AppNavigator, middleware };
