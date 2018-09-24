import { StyleSheet } from 'react-native';
import { widthRes, heightRes, imageRes } from '../../../css/responsiveFunctions';

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
    marginBottom: heightRes(23.5),
  },
  youAreText: {
    width: widthRes(280),
    height: heightRes(29.5),
    fontFamily: 'Futura',
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'rgba(59,73,91, 0.68)',
  },
  pointText: {
    width: widthRes(245.5),
    height: heightRes(32.5),
    fontFamily: 'Futura',
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#3b495b',
    marginBottom: heightRes(41),
  },
  challengeText: {
    width: widthRes(245.5),
    height: heightRes(32.5),
    fontFamily: 'Futura',
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#3b495b',
  },
  awesomeText: {
    textAlign: 'center',
    fontFamily: 'Futura',
    fontSize: 42.5,
    fontWeight: 'bold',
    fontStyle: 'normal',
    color: '#3B495B',
  },
  countText: {
    width: widthRes(77),
    height: heightRes(52),
    fontFamily: 'Futura',
    fontSize: 40,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#3b495b',
    marginBottom: heightRes(22),
  },
  happyRabbitImage: {
    width: widthRes(130),
    height: imageRes(219.5),
    marginBottom: heightRes(20.5),
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
    height: heightRes(67.5),
  },
  yayText: {
    fontFamily: 'Futura',
    fontSize: 25,
    fontWeight: 'bold',
    color: '#ffffff',
  },
});

export default styles;
