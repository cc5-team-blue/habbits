import React from 'react';
import { Text, TextInput, View, StatusBar } from 'react-native';

import { app } from '../../db';
import styles from '../css/styleForAuth';
import { getItemFromLS, setSignupDataToLS } from '../helper';

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
    const { firstName, email, password } = this.state;
    const { navigation } = this.props;
    app
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(data => {
        navigation.navigate('Main');
        setSignupDataToLS(firstName, data.user.uid);
        app
          .database()
          .ref(`users/${data.user.uid}/name`)
          .update({ name: firstName });
        getItemFromLS();
      })
      .catch(error => this.setState({ errorMessage: error.message }));
  };

  render() {
    const { firstName, email, password, errorMessage } = this.state;
    const { navigation } = this.props;
    return (
      <View style={styles.container}>
        <StatusBar barStyle="light-content" />
        <View style={styles.signupContainer}>
          <View style={styles.signupWrapper}>
            <Text style={styles.headline}>Good to meet you!</Text>
            <View style={styles.errorWrapper}>
              {errorMessage && <Text style={{ color: 'red' }}>{errorMessage}</Text>}
            </View>
            <TextInput
              placeholder="First Name"
              autoCapitalize="none"
              style={styles.textInput}
              onChangeText={text => this.setState({ firstName: text })}
              value={firstName}
              returnKeyType="next"
            />
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
            <View style={styles.signupButton} onTouchStart={this.handleSignUp}>
              <Text style={styles.signupText}>SIGN UP</Text>
            </View>
            <View style={styles.switchSignIn} onTouchStart={() => navigation.navigate('Login')}>
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
