import React from 'react';
import { Text, TextInput, View, StatusBar } from 'react-native';

import { app } from '../../db';
import styles from '../css/styleForAuth';

export default class SignUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      email: '',
      password: '',
      errorMessage: null,
    };
  }

  handleSignUp = () => {
    app
      .auth()
      .createUserWithEmailAndPassword(this.state.email, this.state.password)
      .then(() => this.props.navigation.navigate('Main'))
      .catch(error => this.setState({ errorMessage: error.message }));
  };

  // export default class SignUp extends React.Component {
  //   constructor() {
  //     super();
  //     this.state = {
  //       email: '',
  //       password: '',
  //       errorMessage: null,
  //     };
  //   }

  //   handleSignUp = () => {
  //     // TODO: Firebase stuff...
  //     console.log('handleSignUp');
  //   };

  render() {
    return (
      <View style={styles.container}>
        <StatusBar barStyle="light-content" />
        <View style={styles.signupContainer}>
          <View style={styles.signupWrapper}>
            <Text style={styles.headline}>Good to meet you!</Text>
            <View style={styles.errorWrapper}>
              {this.state.errorMessage && (
                <Text style={{ color: 'red' }}>{this.state.errorMessage}</Text>
              )}
            </View>
            <TextInput
              placeholder="First Name"
              autoCapitalize="none"
              style={styles.textInput}
              onChangeText={firstName => this.setState({ firstName })}
              value={this.state.firstName}
              returnKeyType="next"
            />
            <TextInput
              placeholder="Email"
              autoCapitalize="none"
              style={styles.textInput}
              onChangeText={email => this.setState({ email })}
              value={this.state.email}
            />
            <TextInput
              secureTextEntry
              placeholder="Password"
              autoCapitalize="none"
              style={styles.textInput}
              onChangeText={password => this.setState({ password })}
              value={this.state.password}
            />
            <View style={styles.signupButton} onTouchStart={this.handleSignUp}>
              {' '}
              <Text style={styles.signupText}>SIGN UP</Text>
            </View>
            <View
              style={styles.switchSignIn}
              onTouchStart={() => this.props.navigation.navigate('Login')}
            >
              {' '}
              <Text style={styles.switchSignInText}>
                Already a user? <Text style={styles.bold}>Sign in!</Text>
              </Text>
            </View>
          </View>
        </View>
      </View>
    );
  }
}
