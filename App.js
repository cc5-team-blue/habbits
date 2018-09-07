import React from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import reducer from './src/reducers';
import SampleComponent from './src/components/SampleComponent';
import SuccessRabbit from './src/components/SuccessRabbit';

import { insert, select, update, remove } from './db';

insert("users/006",{name:"alian"});
select("users");
update("users/005",{name:"Nour"});
remove("users/006");

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
      <StatusBar barStyle="light-content" />
      <SampleComponent />
      {/* <SuccessRabbit /> */}
    </View>
  </Provider>
);

export default App;
