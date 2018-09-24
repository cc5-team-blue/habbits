import { StyleSheet } from 'react-native';
import { widthRes, heightRes, imageRes } from '../../../css/responsiveFunctions';

const styles = StyleSheet.create({
  realContainer: {
    height: '100%',
    backgroundColor: '#3B495B',
  },
  container: {
    marginLeft: widthRes(25),
    marginTop: heightRes(51.5),
    width: widthRes(325),
    height: heightRes(594),
  },
  awesomeWrapper: {
    paddingTop: 0,
    marginBottom: heightRes(45.5),
    width: widthRes(272),
    height: heightRes(65),
  },
  amazingText: {
    width: widthRes(280),
    height: heightRes(29.5),
    fontFamily: 'Futura',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'rgba(59,73,91, 0.68)',
  },
  pointsText: {
    fontFamily: 'Futura',
    fontSize: 18,
    fontWeight: 'bold',
    fontStyle: 'normal',
    textAlign: 'center',
    color: 'rgba(59, 73, 91, 0.68)',
  },
  challengeText: {
    fontFamily: 'Futura',
    fontSize: 25,
    fontWeight: 'bold',
    fontStyle: 'normal',
    textAlign: 'center',
    color: '#3b495b',
  },
  awesomeText: {
    textAlign: 'center',
    fontFamily: 'Futura',
    fontSize: 30,
    fontWeight: 'bold',
    fontStyle: 'normal',
    color: '#3B495B',
  },
  happyRabbitImage: {
    width: widthRes(130),
    height: imageRes(219.5),
    marginBottom: heightRes(48),
  },
  yayImgContainer: {
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    width: widthRes(325),
    height: heightRes(526.5),
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
