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
    paddingTop: 10,
    height: 60,
    fontFamily: 'Futura',
    fontSize: 30,
    fontWeight: 'bold',
    color: '#242733',
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
    height: 22,
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
    app
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => this.props.navigation.navigate('Main'))
      .catch(error => this.setState({ errorMessage: error.message }));
  };

  render() {
    return (
      <View style={styles.container}>
        <StatusBar barStyle="light-content" />
        <View style={styles.signupContainer}>
          <View style={styles.signupWrapper}>
            <Text style={styles.headline}>Welcome Back!</Text>
            <View style={styles.errorWrapper}>
              {this.state.errorMessage && (
                <Text style={{ color: 'red' }}>{this.state.errorMessage}</Text>
              )}
            </View>
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
            <View style={styles.signupButton} onTouchStart={this.handleLogin}>
              {' '}
              <Text style={styles.signupText}>SIGN IN</Text>
            </View>
            <View
              style={styles.switchSignIn}
              onTouchStart={() => this.props.navigation.navigate('SignUp')}
            >
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
