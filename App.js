import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

import AppReducer from './src/reducers';
import { AppNavigator, middleware } from './src/navigators/AppNavigator';

const store = createStore(AppReducer, applyMiddleware(middleware));

const App = () => (
  <Provider store={store}>
    <AppNavigator />
  </Provider>
);
// Note: I'm(Tsuyoshi) not sure if this line is needed or not later.
// So hold it on please, for just in case.
// AppRegistry.registerComponent('App', () => App);

export default App;
