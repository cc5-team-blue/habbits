import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import { middleware } from './navigators/AppNavigator';
import reducer from './reducers';

const store = createStore(reducer, applyMiddleware(middleware, thunk));

export default store;
