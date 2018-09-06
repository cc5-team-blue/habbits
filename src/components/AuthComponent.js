import React, { Component } from 'react';
import firebase from 'firebase';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import { setUser } from '../actions';
import LoggedInComponent from './LoggedInComponent';
import LoggedOutComponent from './LoggedOutComponent';

export class AuthComponent extends Component {
  /**
   * Once user subscribed, the 'user' prop will either be null
   * (logged out) or an Object (logged in)
   */
  componentDidMount() {
    const { userAuth } = this.props;
    console.log(this.props);
    // here is the place to set api key
    const config = {};
    firebase.initializeApp(config);

    this.authSubscription = firebase.auth().onAuthStateChanged(user => {
      userAuth(user);
    });
  }

  // It stops listening for authentication state changes
  componentWillUnmount() {
    this.authSubscription();
  }

  render() {
    const { loading, user } = this.props;
    // if (loading) return null;
    // // The user is an Object, so they're logged in
    // if (user) return <LoggedInComponent />;
    // // The user is null, so they're logged out
    return (
      <View>
        <Text>from here, LoggedInComponent is supposed to be shown up</Text>
        <LoggedOutComponent />
      </View>
    );
  }
}

const mapStateToProps = state => ({
  loading: state.loading,
  user: state.user,
});

const mapDispatchToProps = dispatch => ({
  userAuth: user => {
    dispatch(setUser(user));
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AuthComponent);
