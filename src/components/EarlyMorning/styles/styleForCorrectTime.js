import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#39485C',
    justifyContent: 'center',
    alignItems: 'center',
  },
  wrapper: {
    height: 527.5,
    width: 325,
    borderRadius: 10,
    backgroundColor: '#FFF8DC',
    justifyContent: 'center',
    alignItems: 'center',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowRadius: 2,
    shadowOpacity: 1,
    marginTop: 20,
    marginBottom: 30,
  },
  header: {
    width: 199,
    height: 45.5,
    fontFamily: 'Futura',
    fontSize: 35,
    fontWeight: 'bold',
    fontStyle: 'normal',
    letterSpacing: 0,
    color: '#ffffff',
  },
  text: {
    width: 235.5,
    height: 117,
    fontFamily: 'Futura',
    fontSize: 30,
    fontWeight: 'bold',
    fontStyle: 'normal',
    letterSpacing: 0,
    textAlign: 'center',
    color: '#555291',
  },
  text2: {
    width: 235.5,
    height: 52,
    fontFamily: 'Futura',
    fontSize: 40,
    fontWeight: 'bold',
    fontStyle: 'normal',
    letterSpacing: 0,
    textAlign: 'center',
    color: '#555291',
  },
  center: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  img: {
    width: 192,
    height: 192,
    backgroundColor: '#eb5e65',
    borderWidth: 4,
    borderColor: '#000000',
    borderRadius: 100,
  },
  headerWrapper: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'flex-start',
  },
});

export default styles;
