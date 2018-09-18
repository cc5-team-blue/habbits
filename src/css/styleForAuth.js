import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  // Loading.js
  loading: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  // SignUp.js
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
    color: '#242733',
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

export default styles;
