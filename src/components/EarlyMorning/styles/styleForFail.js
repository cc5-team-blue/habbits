import { StyleSheet } from 'react-native';
import { widthRes, heightRes, imageRes } from '../../../css/responsiveFunctions';

const styles = StyleSheet.create({
  realContainer: {
    backgroundColor: '#3B495B',
  },
  headline: {
    width: widthRes(219.5),
    height: heightRes(45.5),
    fontFamily: 'Futura',
    fontSize: 35,
    fontWeight: 'bold',
    color: '#ffffff',
    marginTop: heightRes(58),
    marginLeft: widthRes(25.5),
  },
  rectangleContainer: {
    width: widthRes(325),
    height: heightRes(460),
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    backgroundColor: '#555291',
    marginTop: heightRes(14.5),
    marginLeft: widthRes(25.5),
    alignItems: 'center',
  },
  retryButton: {
    width: widthRes(325),
    height: heightRes(67.5),
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    backgroundColor: '#f9fada',
    marginLeft: widthRes(25.5),
    marginBottom: heightRes(21.5),
    justifyContent: 'center',
    alignItems: 'center',
  },
  sadRabbitImage: {
    marginTop: heightRes(38.5),
    width: widthRes(215),
    height: imageRes(215),
  },
  warningText: {
    marginTop: heightRes(35),
    width: widthRes(235.5),
    height: heightRes(90),
    fontFamily: 'Futura',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#f9fada',
  },
  retryText: {
    width: widthRes(272),
    height: heightRes(32.5),
    fontFamily: 'Futura',
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#555291',
  },
  pointText: {
    width: widthRes(181.5),
    height: heightRes(31),
    fontFamily: 'Futura',
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#f9fada',
  },
});

export default styles;
