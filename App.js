import React from 'react';
import { Provider } from 'react-redux';

// import { migrate } from './migrate';
// import { AppNavigator } from './src/navigators/AppNavigator';
import AuthNavigator from './src/navigators/AuthNavigator';
import EarlyMorningNavigator from './src/components/EarlyMorning/Navigator';

import store from './src/store';

// migrate();

const App = () => (
  <Provider store={store}>
    {/* <AppNavigator /> */}
    <EarlyMorningNavigator />
    {/* <AuthNavigator /> */}
  </Provider>
);

export default App;
