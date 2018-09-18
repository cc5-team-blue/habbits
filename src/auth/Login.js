import React from 'react';
import { Text, TextInput, View, StatusBar } from 'react-native';

import { app } from '../../db';
import styles from '../css/styleForAuth';
import { setSignupDataToLS } from '../helper';

export default class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      errorMessage: null,
    };
  }

  handleLogin = () => {
    const { email, password } = this.state;
    const { navigation } = this.props;
    app
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        const { currentUser } = app.auth();
        const { uid } = currentUser;
        app
          .database()
          .ref(`users/${uid}/name`)
          .on('value', data => {
            const name = data.val();
            setSignupDataToLS(name.name, uid);
          });
        navigation.navigate('Main');
      })
      .catch(error => this.setState({ errorMessage: error.message }));
  };

  render() {
    const { email, password, errorMessage } = this.state;
    const { navigation } = this.props;
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
              {' '}
              <Text style={styles.signupText}>SIGN IN</Text>
            </View>
            <View style={styles.switchSignIn} onTouchStart={() => navigation.navigate('SignUp')}>
              {' '}
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
