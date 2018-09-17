import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#3B495B',
  },
  headline: {
    paddingTop: 60,
    paddingLeft: 30,
    flex: 1,
    width: 325,
    height: 45.5,
    fontFamily: 'Futura',
    fontSize: 35,
    fontWeight: 'bold',
    fontStyle: 'normal',
    letterSpacing: 0,
    color: '#ffffff',
    alignSelf: 'flex-start',
    bottom: 0,
  },
  rectangle3: {
    flex: 7,
    width: 325,
    height: 527.5,
    borderRadius: 10,
    backgroundColor: '#eb5e65',
    shadowColor: '#3B495B',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowRadius: 2,
    shadowOpacity: 1,
    marginBottom: '7%',
  },
  timer: {
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  habbitImage: {
    position: 'absolute',
    bottom: 0,
    marginLeft: 85,
    width: 152,
    height: 104,
  },
});

export default styles;
