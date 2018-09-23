import React from 'react';
import { Text, TextInput, View, StatusBar, ActivityIndicator } from 'react-native';
import { connect } from 'react-redux';

import { app } from '../../db';
import styles from '../css/styleForAuth';
import { setSignupDataToLS } from '../helper';
import { saveNameToStore, saveUidToStore } from '../actions';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      errorMessage: null,
      loading: false,
    };
  }

  handleLogin = async () => {
    const { email, password, loading } = this.state;
    const { navigation, saveName, saveUid } = this.props;
    console.log('click!');
    this.setState({ loading: true });
    console.log(loading);

    try {
      await app.auth().signInWithEmailAndPassword(email, password);
      const { currentUser } = await app.auth();
      const { uid } = currentUser;
      const nameFromFB = await app.database().ref(`users/${uid}/name`);
      await nameFromFB.once('value', data => {
        const name = data.val();
        saveName(name.name);
        saveUid(uid);
        setSignupDataToLS(name.name, uid);
      });
      await navigation.navigate('Main');
    } catch (err) {
      this.setState({ loading: false });
      this.setState({ errorMessage: err.message });
    }
  };

  render() {
    const { email, password, errorMessage, loading } = this.state;
    const { navigation } = this.props;

    if (loading) {
      return (
        <View style={styles.container}>
          <StatusBar barStyle="light-content" />
          <ActivityIndicator size="large" />
          <Text style={styles.loadingText}>Loading your progress...</Text>
        </View>
      );
    }
    return (
      <View style={styles.container}>
        <StatusBar barStyle="light-content" />
        <View style={styles.signupContainer}>
          <View style={styles.signupWrapper}>
            <Text style={styles.headline}>Welcome Back!</Text>
            <View style={styles.errorWrapper}>
              {errorMessage && <Text style={{ color: 'red' }}>{errorMessage}</Text>}
            </View>
            <TextInput
              placeholder="Email"
              autoCapitalize="none"
              style={styles.textInput}
              onChangeText={text => this.setState({ email: text })}
              value={email}
            />
            <TextInput
              secureTextEntry
              placeholder="Password"
              autoCapitalize="none"
              style={styles.textInput}
              onChangeText={text => this.setState({ password: text })}
              value={password}
            />
            <View style={styles.signupButton} onTouchStart={this.handleLogin}>
              <Text style={styles.signupText}>SIGN IN</Text>
            </View>
            <View style={styles.switchSignIn} onTouchStart={() => navigation.navigate('SignUp')}>
              <Text style={styles.switchSignInText}>
                New here? <Text style={styles.bold}>Sign up!</Text>
              </Text>
            </View>
          </View>
        </View>
      </View>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  saveName: name => {
    dispatch(saveNameToStore(name));
  },
  saveUid: uid => {
    dispatch(saveUidToStore(uid));
  },
});

export default connect(
  null,
  mapDispatchToProps
)(Login);
