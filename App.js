import React from 'react';
import { Provider } from 'react-redux';
import Analytics from './src/components/Analytics';
import { insert, push, select, update, remove } from './db';
import { migrate } from './migrate';
import { AppNavigator, middleware } from './src/navigators/AppNavigator';
import {store} from './src/store'

const App = () => (
  <Provider store={store}>
    {/* <Analytics /> */}
    <AppNavigator />
  </Provider>
);

export default App;
