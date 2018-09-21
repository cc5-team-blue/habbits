import { StyleSheet } from 'react-native';
import { widthRes, heightRes } from '../../../css/responsiveFunctions';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#39485C',
    height: '100%',
  },
  wrapper: {
    width: widthRes(325),
    height: heightRes(527.5),
    borderRadius: 10,
    backgroundColor: '#fff7dd',
    marginLeft: widthRes(25.5),
    alignItems: 'center',
  },
  headlineWrapper: {
    flexDirection: 'row',
  },
  header: {
    flex: 10,
    paddingTop: heightRes(60),
    paddingLeft: widthRes(30),
    paddingBottom: heightRes(10),
    fontFamily: 'Futura',
    fontSize: 35,
    fontWeight: 'bold',
    fontStyle: 'normal',
    color: '#ffffff',
    alignSelf: 'flex-start',
    bottom: 0,
  },
  title: {
    width: widthRes(235.5),
    height: heightRes(53),
    fontFamily: 'Futura',
    fontSize: 30,
    fontWeight: 'bold',
    color: '#555291',
    marginTop: heightRes(41),
  },
  text: {
    width: widthRes(235.5),
    height: heightRes(44),
    fontFamily: 'Avenir',
    fontSize: 16,
    fontWeight: '900',
    color: '#555291',
  },
  title2: {
    width: widthRes(235.5),
    height: heightRes(53),
    fontFamily: 'Futura',
    fontSize: 30,
    fontWeight: 'bold',
    color: '#555291',
    marginTop: heightRes(33),
  },
  text2: {
    width: widthRes(235.5),
    height: heightRes(66),
    fontFamily: 'Avenir',
    fontSize: 16,
    fontWeight: '900',
    color: '#555291',
    marginBottom: heightRes(35),
  },
  img: {
    width: widthRes(149.5),
    height: heightRes(125),
    marginTop: heightRes(12),
  },
  btn: {
    width: widthRes(272),
    height: heightRes(32.5),
    fontFamily: 'Futura',
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#fff7dd',
  },
  btnWrapper: {
    justifyContent: 'center',
    alignItems: 'center',
    width: widthRes(325),
    height: heightRes(67.5),
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    backgroundColor: '#555291',
  },
});

export default styles;
