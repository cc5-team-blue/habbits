import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#3B495B',
  },
  headlineWrapper: {
    // flex: 1
    flexDirection: 'row',
  },
  headline: {
    flex: 10,
    paddingTop: 60,
    paddingLeft: 30,
    paddingBottom: 10,
    // width: 325,
    // height: 45.5,
    fontFamily: 'Futura',
    fontSize: 35,
    fontWeight: 'bold',
    fontStyle: 'normal',
    color: '#ffffff',
    alignSelf: 'flex-start',
    bottom: 0,
  },
  rectangleContainer: {
    flex: 8,
    width: 325,
    borderRadius: 10,
    backgroundColor: '#eb5e65',
    marginBottom: '4%',
  },
  seconds: {
    marginTop: 171,
    width: 325,
    height: 78,
    fontFamily: 'Futura',
    fontSize: 60,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#ffffff',
  },
  toGoOffline: {
    marginTop: 6,
    width: 325,
    height: 32.5,
    fontFamily: 'Futura',
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'rgba(255, 255, 255, 0.68)',
  },
  enterFlightMode: {
    marginTop: 155,
    paddingLeft: 40,
    paddingRight: 40,
    width: 325,
    height: 100,
    fontFamily: 'Futura',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'rgba(255, 255, 255, 0.68)',
  },
});

export default styles;
