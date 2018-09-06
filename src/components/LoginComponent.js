// import React, { Component } from 'react';
// import firebase from 'react-native-firebase';
// import { connect } from 'react-redux';
// import { setUser } from '../actions';
// import LoggedIn from './LoggedIn';
// import LoggedOut from './LoggedOut';

// const config = {
//   apiKey: 'AIzaSyDtcRSUzukS3G9iLBsVp0tksng3CdH90Wc',
//   authDomain: 'habitrabbit-abf11.firebaseapp.com',
//   databaseURL: 'https://habitrabbit-abf11.firebaseio.com',
//   projectId: 'habitrabbit-abf11',
//   storageBucket: 'habitrabbit-abf11.appspot.com',
//   messagingSenderId: '279052639318',
// };
// firebase.initializeApp(config);

// export class LoginComponent extends Component {
//   /**
//    * Once user subscribed, the 'user' prop will either be null
//    * (logged out) or an Object (logged in)
//    */
//   componentDidMount() {
//     this.authSubscription = firebase.auth().onAuthStateChanged(user => {
//       setUser(user);
//     });
//   }

//   // It stops listening for authentication state changes
//   componentWillUnmount() {
//     this.authSubscription();
//   }

//   render() {
//     const { loading, user } = this.props;
//     if (loading) return null;
//     // The user is an Object, so they're logged in
//     if (user) return <LoggedIn />;
//     // The user is null, so they're logged out
//     return <LoggedOut />;
//   }
// }

// const mapStateToProps = state => ({
//   loading: state.loading,
//   user: state.user,
// });

// const mapDispatchToProps = dispatch => ({
//   setUser: user => {
//     dispatch(setUser(user));
//   },
// });

// export default connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(LoginComponent);
