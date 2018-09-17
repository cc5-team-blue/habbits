import { StyleSheet } from 'react-native';
import { widthRes, heightRes } from './responsiveFunctions';

const styles = StyleSheet.create({
  realContainer: {
    height: '100%',
    backgroundColor: '#3B495B',
  },
  container: {
    marginLeft: '6%',
    marginTop: '12%',
    height: '90%',
    width: '88%',
  },
  awesomeWrapper: {
    paddingTop: 0,
    marginBottom: '10%',
  },
  youAreText: {
    fontFamily: 'Futura',
    fontSize: 25,
    fontWeight: 'bold',
    fontStyle: 'normal',
    textAlign: 'center',
    color: 'rgba(59, 73, 91, 0.68)',
  },
  pointsText: {
    fontFamily: 'Futura',
    fontSize: 25,
    fontWeight: 'bold',
    fontStyle: 'normal',
    textAlign: 'center',
    color: 'rgba(59, 73, 91, 0.68)',
    marginBottom: '5%',
  },
  awesomeText: {
    fontFamily: 'Futura',
    fontSize: 42.5,
    fontWeight: 'bold',
    fontStyle: 'normal',
    color: '#3B495B',
  },
  happyRabbitImage: {
    width: widthRes(155),
    height: heightRes(262),
    marginBottom: '12%',
  },
  yayImgContainer: {
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '95%',
    backgroundColor: '#ffe5d8',
  },
  yayButton: {
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    backgroundColor: '#ff627a',
    alignItems: 'center',
    justifyContent: 'center',
    height: '10%',
  },
  yayText: {
    fontFamily: 'Futura',
    fontSize: 25,
    fontWeight: 'bold',
    fontStyle: 'normal',
    letterSpacing: 0,
    color: '#ffffff',
  },
});

export default styles;
