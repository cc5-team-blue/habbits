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
    // marginTop: heightRes(14.5),
    marginBottom: heightRes(21.5),
    marginLeft: widthRes(25),
  },
  headlineWrapper: {
    flex: 1,
    flexDirection: 'row',
  },
  header: {
    flex: 1,
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
  headlineText: {
    width: widthRes(235.5),
    height: heightRes(60),
    fontFamily: 'Futura',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#555291',
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
});

export default styles;
