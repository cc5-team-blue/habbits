import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  realContainer: {
    backgroundColor: '#3B495B',
  },
  headline: {
    width: 219.5,
    height: 45.5,
    fontFamily: 'Futura',
    fontSize: 35,
    fontWeight: 'bold',
    color: '#ffffff',
    marginTop: 58,
    marginLeft: 25.5,
  },
  rectangleContainer: {
    width: 325,
    height: 460,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    backgroundColor: '#555291',
    marginTop: 14.5,
    marginLeft: 25.5,
    alignItems: 'center',
  },
  retryButton: {
    width: 325,
    height: 67.5,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    backgroundColor: '#f9fada',
    marginLeft: 25.5,
    marginBottom: 21.5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  sadRabbitImage: {
    marginTop: 38.5,
    width: 215,
    height: 215,
  },
  warningText: {
    marginTop: 35,
    width: 235.5,
    height: 90,
    fontFamily: 'Futura',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#f9fada',
  },
  retryText: {
    width: 272,
    height: 32.5,
    fontFamily: 'Futura',
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#555291',
  },
  pointText: {
    width: 181.5,
    height: 31,
    fontFamily: 'Futura',
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#f9fada',
  },
});

export default styles;
