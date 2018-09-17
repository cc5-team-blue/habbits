import React from 'react';
import { View, Text, ActivityIndicator, StyleSheet } from 'react-native';

// import firebase from 'react-native-firebase';
import { app } from '../../db';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default class Loading extends React.Component {
  componentDidMount() {
    const { navigation } = this.props;
    app.auth().onAuthStateChanged(user => {
      navigation.navigate(user ? 'Main' : 'SignUp');
    });
  }

  // export default class Loading extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Loading</Text>
        <ActivityIndicator size="large" />
      </View>
    );
  }
}
