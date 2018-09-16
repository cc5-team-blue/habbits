import React from 'react';
import { StyleSheet, Text, TextInput, View, StatusBar } from 'react-native';
import { widthRes, heightRes } from '../css/responsiveFunctions';

import { app } from '../../db';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#3b495b',
  },
  signupContainer: {
    width: widthRes(325),
    height: heightRes(600),
    marginTop: heightRes(13),
    borderRadius: 10,
    backgroundColor: '#fbfeff',
  },
  signupWrapper: {
    marginLeft: widthRes(25),
    marginRight: widthRes(25),
    marginTop: widthRes(31),
  },
  headline: {
    width: widthRes(267),
    paddingTop: heightRes(10),
    height: heightRes(60),
    fontFamily: 'Futura',
    fontSize: 30,
    fontWeight: 'bold',
    color: '#242733',
  },
  textInput: {
    width: widthRes(270),
    height: heightRes(45.5),
    borderRadius: 10,
    backgroundColor: '#ffffff',
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: '#151515',
    marginTop: heightRes(7),
    marginBottom: heightRes(7),
    paddingLeft: widthRes(12.5),
    paddingRight: widthRes(12.5),
    paddingTop: heightRes(12.5),
    paddingBottom: heightRes(12.5),
  },
  signupButton: {
    marginTop: heightRes(20),
    alignItems: 'center',
    justifyContent: 'center',
    width: widthRes(270),
    height: heightRes(35),
    borderRadius: heightRes(10),
    backgroundColor: '#ff575c',
  },
  signupText: {
    width: widthRes(186.9),
    height: heightRes(22),
    fontFamily: 'Futura',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#ffffff',
  },
  switchSignIn: {
    marginTop: heightRes(10),
    height: heightRes(30),
    width: '100%',
    justifyContent: 'center',
  },
  switchSignInText: {
    width: '100%',
    height: heightRes(20.5),
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
