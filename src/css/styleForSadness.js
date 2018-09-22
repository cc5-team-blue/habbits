import { StyleSheet } from 'react-native';
import { widthRes, heightRes } from './responsiveFunctions';

const styles = StyleSheet.create({
  realContainer: {
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
    paddingBottom: heightRes(10),
    paddingTop: heightRes(60),
    paddingLeft: widthRes(30),
    fontFamily: 'Futura',
    fontSize: 35,
    fontWeight: 'bold',
    color: '#ffffff',
  },
  rectangleContainer: {
    flex: 7,
    width: widthRes(325),
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    backgroundColor: '#555291',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  retryButton: {
    width: widthRes(325),
    height: heightRes(67.5),
    borderBottomRightRadius: 10,
    borderBottomLeftRadius: 10,
    backgroundColor: '#f9fada',
    marginBottom: heightRes(30),
    alignItems: 'center',
    justifyContent: 'center',
  },
  sadRabbitImage: {
    marginTop: heightRes(46),
    width: widthRes(249.5),
    height: heightRes(249),
  },
  warningText: {
    marginTop: heightRes(40.5),
    width: widthRes(235.5),
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
  minusText: {
    marginTop: heightRes(15),
    width: widthRes(235.5),
    fontFamily: 'Futura',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#f9fada',
  },
});

export default styles;
