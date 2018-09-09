import React from 'react';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import reducer from './src/reducers';
import SampleComponent from './src/components/SampleComponent';
import SuccessRabbit from './src/components/SuccessRabbit';
import Analytics from './src/components/Analytics';

import { insert, push, select, update, remove } from './db';
import { migrate } from './migrate';

// migrate()
import { createStore, applyMiddleware } from 'redux';

import AppReducer from './src/reducers';
import { AppNavigator, middleware } from './src/navigators/AppNavigator';

const store = createStore(AppReducer, applyMiddleware(middleware));

const App = () => (
  <Provider store={store}>
    <Analytics />
    {/* <AppNavigator /> */}
  </Provider>
);

export default App;
