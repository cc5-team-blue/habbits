import React, { Component } from 'react';
import { StyleSheet, View, ActivityIndicator, StatusBar, Text } from 'react-native';
import { connect } from 'react-redux';
import { app } from '../../../../db';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#39485C',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontFamily: 'Futura',
    fontSize: 14,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 10,
  },
});

class Loading extends Component {
  componentDidMount = () => {
    const { uid, navigation } = this.props;
    const db = app.database();
    const ref = db.ref('users');
    const user = ref.child(uid);
    const habits = user.child('habits');
    const earlyMorning = habits.child('early_morning');

    earlyMorning.on('value', data => {
      if (data.exists()) {
        const result = data.toJSON();
        if (result.tutorial) {
          navigation.navigate('Start');
        } else {
          navigation.navigate('MainScreen');
        }
      } else {
        earlyMorning.set({ tutorial: true });
      }
    });
  };

  render() {
    return (
      <View style={styles.container}>
        <StatusBar barStyle="light-content" />
        <Text style={styles.text}>The early bird gets the worm...</Text>
        <ActivityIndicator size="large" />
      </View>
    );
  }
}

const mapStateToProps = state => ({
  uid: state.red.uid,
});

export default connect(
  mapStateToProps,
  null
)(Loading);
