import { StyleSheet } from 'react-native';

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
    paddingBottom: 10,
    paddingTop: 60,
    paddingLeft: 30,
    fontFamily: 'Futura',
    fontSize: 35,
    fontWeight: 'bold',
    color: '#ffffff',
  },
  rectangleContainer: {
    flex: 7,
    width: 325,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    backgroundColor: '#555291',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  retryButton: {
    width: 325,
    height: 67.5,
    borderBottomRightRadius: 10,
    borderBottomLeftRadius: 10,
    backgroundColor: '#f9fada',
    marginBottom: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  sadRabbitImage: {
    marginTop: 46,
    width: 249.5,
    height: 249,
  },
  warningText: {
    marginTop: 40.5,
    width: 235.5,
    height: 120,
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
});

export default styles;
