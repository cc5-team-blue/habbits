import React from 'react';
import { StyleSheet, View } from 'react-native';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import reducer from './src/reducers';
import Wrapper from './Wrapper';

// It sets the store with thunk middleware
const store = createStore(reducer, applyMiddleware(thunk));

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#3B495B',
  },
});

const App = () => (
  <Provider store={store}>
    <View style={styles.container}>
      <Wrapper />
    </View>
  </Provider>
);

export default App;
