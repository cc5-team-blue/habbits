import React from 'react';
import { Provider } from 'react-redux';

import { AppNavigator } from './src/navigators/AppNavigator';
// import MainNavigator from './src/navigators/MainNavigator';

import { store } from './src/store';

const App = () => (
  <Provider store={store}>
    <AppNavigator />
    {/* <MainNavigator /> */}
  </Provider>
);

export default App;
