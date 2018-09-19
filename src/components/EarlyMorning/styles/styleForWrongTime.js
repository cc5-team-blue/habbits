import { StyleSheet } from 'react-native';
import { widthRes, heightRes } from '../../../css/responsiveFunctions';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#39485C',
  },
  wrapper: {
    height: heightRes(527.5),
    width: widthRes(325),
    borderRadius: 10,
    backgroundColor: '#FFF8DC',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: heightRes(14.5),
    marginBottom: heightRes(21.5),
    marginLeft: widthRes(25),
  },
  header: {
    width: widthRes(199),
    height: heightRes(45.5),
    fontFamily: 'Futura',
    fontSize: 35,
    fontWeight: 'bold',
    color: '#ffffff',
  },
  headlineText: {
    width: widthRes(235.5),
    height: heightRes(60),
    fontFamily: 'Futura',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#555291',
    // marginTop: 30,
  },
  challengeText: {
    width: '100%',
    height: heightRes(29.5),
    fontFamily: 'Futura',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#555291',
  },
  pointText: {
    width: '100%',
    height: heightRes(32.5),
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
    marginTop: heightRes(55.5),
    marginBottom: heightRes(60),
  },
  img: {
    width: widthRes(204.5),
    height: heightRes(204.5),
  },
  headerWrapper: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'flex-start',
    marginLeft: widthRes(25),
  },
});

export default styles;
