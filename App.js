import React from 'react';
import { Provider } from 'react-redux';
import { AppNavigator } from './src/navigators/AppNavigator';
import store from './src/store';

const App = () => (
  <Provider store={store}>
    <AppNavigator />
  </Provider>
);

export default App;
