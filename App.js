import React from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import reducer from './src/reducers';
import SampleComponent from './src/components/SampleComponent';
import SuccessRabbit from './src/components/SuccessRabbit';

import firebase from 'firebase';

const config = {
  apiKey: 'AIzaSyB0ztjio3hW5x6UKMUH2fBtAwGdPgkVFC8',
  authDomain: 'test-d3d42.firebaseapp.com',
  databaseURL: 'https://test-d3d42.firebaseio.com',
  projectId: 'test-d3d42',
  storageBucket: 'test-d3d42.appspot.com',
  messagingSenderId: '856945851988',
};
// initialinzing
firebase.initializeApp(config);

// insert
firebase
  .database()
  .ref('users/002')
  .set({
    name: 'Mariam Shhadeh',
    age: 23,
  })
  .then(() => {
    console.log('Inserted');
  })
  .catch(error => {
    console.log(error);
  });
// select
firebase
  .database()
  .ref('users')
  .on('value', data => {
    console.log(data.toJSON());
  });
// update
firebase
  .database()
  .ref('users/002')
  .update({
    name: 'Mayoom',
  });
// delete
firebase
  .database()
  .ref('users/002')
  .remove();

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
