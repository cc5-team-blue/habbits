import React from 'react';
import { Text, TextInput, View, StatusBar, ActivityIndicator } from 'react-native';
import { connect } from 'react-redux';

import { app } from '../../db';
import styles from '../css/styleForAuth';
import { getItemFromLS, setSignupDataToLS } from '../helper';
import { saveNameToStore, saveUidToStore } from '../actions';

class SignUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      email: '',
      password: '',
      errorMessage: null,
      loading: false,
    };
  }

  handleSignUp = async () => {
    const { firstName, email, password, loading } = this.state;
    const { navigation, saveName, saveUid } = this.props;
    try {
      const returnFromFB = await app.auth().createUserWithEmailAndPassword(email, password);
      await saveName(firstName);
      await saveUid(returnFromFB.user.uid);
      setSignupDataToLS(firstName, returnFromFB.user.uid);
      const userNamePath = `users/${returnFromFB.user.uid}/name`;
      const userRootPath = `users/${returnFromFB.user.uid}`;
      const firebaseDB = await app.database();
      this.setState({ loading: true });
      await firebaseDB.ref(userNamePath).update({ name: firstName });
      await firebaseDB.ref(userRootPath).update({ totalPoints: 0 });
      await getItemFromLS();
      navigation.navigate('Main');
    } catch (err) {
      console.log(err);
      this.setState({ errorMessage: err.message, loading: false });
    }
  };

  render() {
    const { firstName, email, password, errorMessage, loading } = this.state;
    const { navigation } = this.props;

    if (loading) {
      return (
        <View style={styles.container}>
          <StatusBar barStyle="light-content" />
          <ActivityIndicator size="large" />
          <Text style={styles.loadingText}>Preparing you for a bright future...</Text>
        </View>
      );
    }
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
)(SignUp);
