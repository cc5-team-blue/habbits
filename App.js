import React from 'react';
import { StyleSheet, View, StatusBar } from 'react-native';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import AppReducer from './src/reducers';
import { AppNavigator, middleware } from './src/navigators/AppNavigator';
// import SampleComponent from './src/components/SampleComponent';


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
