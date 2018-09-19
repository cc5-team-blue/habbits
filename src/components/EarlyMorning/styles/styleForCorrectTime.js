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
    marginTop: heightRes(14.5),
    marginLeft: widthRes(25.5),
    alignItems: 'center',
  },
  header: {
    width: widthRes(199),
    height: heightRes(45.5),
    fontFamily: 'Futura',
    fontSize: 35,
    fontWeight: 'bold',
    color: '#ffffff',
    marginTop: heightRes(58),
    marginLeft: widthRes(25.5),
  },
  text: {
    width: widthRes(235.5),
    height: heightRes(120),
    fontFamily: 'Futura',
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#555291',
    marginTop: heightRes(47),
  },
  text2: {
    width: widthRes(235.5),
    height: heightRes(52),
    fontFamily: 'Futura',
    fontSize: 40,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#555291',
    marginTop: heightRes(35),
  },
  img: {
    width: widthRes(192),
    height: heightRes(192),
    backgroundColor: '#eb5e65',
    borderWidth: 4,
    borderColor: '#000000',
    borderRadius: 100,
    marginTop: heightRes(51.5),
  },
});

export default styles;
