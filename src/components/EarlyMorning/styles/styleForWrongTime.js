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
    width: 280,
    height: 29.5,
    fontFamily: 'Futura',
    fontSize: 18,
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
    width: 204.5,
    height: 204.5,
    borderColor: '#5A4A93',
    borderWidth: 5,
    borderRadius: 100,
  },
  headerWrapper: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'flex-start',
  },
});

export default styles;
