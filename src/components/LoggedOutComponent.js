import React, { Component } from 'react';
import { StyleSheet, View, Button, TextInput, Text } from 'react-native';
import { connect } from 'react-redux';
import firebase from 'firebase';
import { setUser, setEmail, setPassword } from '../actions';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export class LoggedOutComponent extends Component {
  onLogin = () => {
    const { email, password, userAuth } = this.props;
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(user => {
        userAuth(user);
      })
      .catch(error => {
        const { code, message } = error;
        console.log(code, message);
      });
  };

  onRegister = () => {
    const { email, password, userAuth } = this.props;
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(user => {
        userAuth(user);
      })
      .catch(error => {
        const { code, message } = error;
        console.log(code, message);
      });
  };

  render() {
    const { email, password, changeEmail, changePassword } = this.props;
    return (
      <View style={styles}>
        <Text>here is the logout component</Text>
        <TextInput style={{ color: 'white' }} editable maxLength={40} onChangeText={changeEmail} />
        <TextInput
          style={{ color: 'white' }}
          editable
          maxLength={40}
          onChangeText={changePassword}
        />
        <Text>{email}</Text>
        <Text>{password}</Text>
        <Button onPress={this.onLogin} title="Login" />
        <Button onPress={this.onRegister} title="Register" />
      </View>
    );
  }
}

const mapStateToProps = state => ({
  email: state.email,
  password: state.password,
});

const mapDispatchToProps = dispatch => ({
  userAuth: user => {
    dispatch(setUser(user));
  },
  changeEmail: email => {
    dispatch(setEmail(email));
  },
  changePassword: password => {
    dispatch(setPassword(password));
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoggedOutComponent);
