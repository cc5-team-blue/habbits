import React from 'react';
import { StyleSheet, Text, TextInput, View, StatusBar } from 'react-native';

import { app } from '../../db';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#3b495b',
  },
  signupContainer: {
    width: 325,
    height: 600,
    marginTop: 13,
    borderRadius: 10,
    backgroundColor: '#fbfeff',
  },
  signupWrapper: {
    marginLeft: 25,
    marginRight: 25,
    marginTop: 31,
  },
  headline: {
    width: 267,
    height: 90,
    fontFamily: 'Futura',
    fontSize: 30,
    fontWeight: 'bold',
    color: '#3b495b',
  },
  errorWrapper: {
    height: 15,
  },
  textInput: {
    width: 270,
    height: 45.5,
    borderRadius: 10,
    backgroundColor: '#ffffff',
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: '#151515',
    marginTop: 7,
    marginBottom: 7,
    padding: 12.5,
  },
  signupButton: {
    marginTop: 20,
    alignItems: 'center',
    justifyContent: 'center',
    width: 270,
    height: 35,
    borderRadius: 10,
    backgroundColor: '#ff575c',
  },
  signupText: {
    width: 186.9,
    height: 26,
    fontFamily: 'Futura',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#ffffff',
  },
  switchSignIn: {
    marginTop: 10,
    height: 30,
    width: '100%',
    justifyContent: 'center',
  },
  switchSignInText: {
    width: '100%',
    height: 20.5,
    fontFamily: 'Avenir',
    fontSize: 15,
    textAlign: 'right',
    color: '#3b495b',
  },
  bold: {
    fontWeight: 'bold',
  },
});

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
              <Text style={styles.signupText}>Sign Up</Text>
            </View>
            <View
              style={styles.switchSignIn}
              onTouchStart={() => this.props.navigation.navigate('Login')}
            >
              {' '}
              <Text style={styles.switchSignInText}>
                Already a user? <Text style={styles.bold}>Sign in</Text>
              </Text>
            </View>
          </View>
        </View>
      </View>
    );
  }
}
