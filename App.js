import React from 'react';
import { Provider } from 'react-redux';
import { AppNavigator } from './src/navigators/AppNavigator';
import { BottomNavigator } from './src/navigators/BottomNavigator';
import { store } from './src/store';

const App = () => (
  <Provider store={store}>
    {/* <AppNavigator /> */}
    <BottomNavigator />
  </Provider>
);

export default App;
