import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#39485C',
  },
  wrapper: {
    height: 527.5,
    width: 325,
    borderRadius: 10,
    backgroundColor: '#FFF8DC',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 14.5,
    marginBottom: 21.5,
    marginLeft: 25,
  },
  header: {
    width: 199,
    height: 45.5,
    fontFamily: 'Futura',
    fontSize: 35,
    fontWeight: 'bold',
    color: '#ffffff',
  },
  headlineText: {
    width: 235.5,
    height: 60,
    fontFamily: 'Futura',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#555291',
    // marginTop: 30,
  },
  challengeText: {
    width: '100%',
    height: 29.5,
    fontFamily: 'Futura',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#555291',
  },
  pointText: {
    width: '100%',
    height: 32.5,
    fontFamily: 'Futura',
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#555291',
  },
  center: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageWrapper: {
    marginTop: 55.5,
    marginBottom: 60,
  },
  img: {
    width: 204.5,
    height: 204.5,
  },
  headerWrapper: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'flex-start',
    marginLeft: 25,
  },
});

export default styles;
