import { StyleSheet } from 'react-native';
import { widthRes, heightRes } from './responsiveFunctions';

const styles = StyleSheet.create({
  // Loading.js
  loading: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#3b495b',
  },
  loadingText: {
    paddingBottom: heightRes(40),
    fontFamily: 'Futura',
    fontSize: 14,
    fontWeight: 'bold',
    color: '#242733',
  },
  // SignUp.js
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
    marginTop: heightRes(31),
  },
  headline: {
    width: widthRes(267),
    height: heightRes(90),
    fontFamily: 'Futura',
    fontSize: 30,
    fontWeight: 'bold',
    color: '#242733',
  },
  errorWrapper: {
    height: heightRes(15),
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
    borderRadius: 10,
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
  loadingText: {
    marginTop: heightRes(20),
    fontFamily: 'Futura',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#ffffff',
  },
});

export default styles;
