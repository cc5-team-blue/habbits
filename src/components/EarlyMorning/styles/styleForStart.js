import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#39485C',
    height: '100%',
  },
  wrapper: {
    width: 325,
    height: 527.5,
    borderRadius: 10,
    backgroundColor: '#fff7dd',
    marginTop: 14.5,
    marginLeft: 25.5,
    alignItems: 'center',
  },
  header: {
    width: 199,
    height: 45.5,
    fontFamily: 'Futura',
    fontSize: 35,
    fontWeight: 'bold',
    color: '#ffffff',
    marginTop: 58,
    marginLeft: 25.5,
  },
  title: {
    width: 235.5,
    height: 53,
    fontFamily: 'Futura',
    fontSize: 30,
    fontWeight: 'bold',
    color: '#555291',
    marginTop: 41,
  },
  text: {
    width: 235.5,
    height: 44,
    fontFamily: 'Avenir',
    fontSize: 16,
    fontWeight: '900',
    color: '#555291',
  },
  title2: {
    width: 235.5,
    height: 53,
    fontFamily: 'Futura',
    fontSize: 30,
    fontWeight: 'bold',
    color: '#555291',
    marginTop: 33,
  },
  text2: {
    width: 235.5,
    height: 66,
    fontFamily: 'Avenir',
    fontSize: 16,
    fontWeight: '900',
    color: '#555291',
    marginBottom: 35,
  },
  img: {
    width: 149.5,
    height: 125,
    marginTop: 12,
  },
  btn: {
    width: 272,
    height: 32.5,
    fontFamily: 'Futura',
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#fff7dd',
  },
  btnWrapper: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 325,
    height: 67.5,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    backgroundColor: '#555291',
  },
});

export default styles;
