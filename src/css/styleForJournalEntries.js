import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#3B495B',
    height: '100%',
  },
  wrapper: {
    marginTop: 58,
    marginLeft: 25.5,
  },
  headline: {
    width: 240,
    height: 45.5,
    fontFamily: 'Futura',
    fontSize: 35,
    fontWeight: 'bold',
    color: '#ffffff',
  },
  rectangleContainer: {
    marginTop: 9,
    width: 325,
    height: 533,
    borderRadius: 10,
    backgroundColor: '#fbfeff',
  },
  entriesWrapper: {
    marginTop: 10,
    marginBottom: 10,
    marginLeft: 20.5,
    marginRight: 20.5,
  },
  row: {
    marginTop: 9,
    marginBottom: 9,
  },
  dateStarRow: {
    flexDirection: 'row',
    marginBottom: 4,
  },
  date: {
    flex: 8,
    width: 112.5,
    height: 22,
    fontFamily: 'Avenir',
    fontSize: 16,
    fontWeight: '900',
    color: '#eb5e65',
  },
  ratingWrapper: {
    flex: 3,
    flexDirection: 'row',
  },
  rating: {
    width: 14,
    height: 13,
    alignSelf: 'center',
    marginRight: 2,
  },
  entryRow: {
    marginTop: 5,
  },
  entryHeadline: {
    width: 61.5,
    height: 22,
    fontFamily: 'Avenir',
    fontSize: 16,
    fontWeight: '900',
    fontStyle: 'normal',
    letterSpacing: 0,
    color: '#242733',
  },
  entryText: {
    width: 280,
    height: 44,
    fontFamily: 'Avenir',
    fontSize: 16,
    fontWeight: '500',
    color: '#242733',
  },
});

export default styles;
