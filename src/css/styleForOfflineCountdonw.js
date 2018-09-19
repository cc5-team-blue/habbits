import { StyleSheet } from 'react-native';
import { widthRes, heightRes } from './responsiveFunctions';

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
    paddingTop: heightRes(60),
    paddingLeft: widthRes(30),
    paddingBottom: heightRes(10),
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
    width: widthRes(325),
    borderRadius: 10,
    backgroundColor: '#eb5e65',
    marginBottom: '4%',
  },
  seconds: {
    marginTop: heightRes(171),
    width: widthRes(325),
    height: heightRes(78),
    fontFamily: 'Futura',
    fontSize: 60,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#ffffff',
  },
  toGoOffline: {
    marginTop: heightRes(6),
    width: widthRes(325),
    height: heightRes(32.5),
    fontFamily: 'Futura',
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'rgba(255, 255, 255, 0.68)',
  },
  enterFlightMode: {
    marginTop: heightRes(155),
    paddingLeft: widthRes(40),
    paddingRight: widthRes(40),
    width: widthRes(325),
    height: heightRes(100),
    fontFamily: 'Futura',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'rgba(255, 255, 255, 0.68)',
  },
});

export default styles;
