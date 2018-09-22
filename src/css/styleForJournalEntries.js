import { StyleSheet } from 'react-native';
import { widthRes, heightRes } from './responsiveFunctions';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#3B495B',
    height: '100%',
  },
  wrapper: {
    marginTop: heightRes(30),
    marginLeft: widthRes(25.5),
  },
  headlineWrapper: {
    // flex: 1,
    flexDirection: 'row',
  },
  headline: {
    flex: 10,
    paddingBottom: heightRes(7),
    paddingTop: heightRes(30),
    paddingLeft: widthRes(12),
    fontFamily: 'Futura',
    fontSize: 35,
    fontWeight: 'bold',
    color: '#ffffff',
  },
  rectangleContainer: {
    marginTop: heightRes(9),
    width: widthRes(325),
    height: heightRes(533),
    borderRadius: 10,
    backgroundColor: '#fbfeff',
  },
  entriesWrapper: {
    marginTop: heightRes(10),
    marginBottom: heightRes(10),
    marginLeft: widthRes(20.5),
    marginRight: widthRes(20.5),
  },
  row: {
    marginTop: heightRes(9),
    marginBottom: heightRes(9),
  },
  dateStarRow: {
    flexDirection: 'row',
    marginBottom: heightRes(4),
  },
  date: {
    flex: 8,
    width: widthRes(112.5),
    height: heightRes(22),
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
    width: widthRes(14),
    height: heightRes(13),
    alignSelf: 'center',
    marginRight: widthRes(2),
  },
  entryRow: {
    marginTop: heightRes(5),
  },
  entryHeadline: {
    width: widthRes(61.5),
    height: heightRes(22),
    fontFamily: 'Avenir',
    fontSize: 16,
    fontWeight: '900',
    fontStyle: 'normal',
    letterSpacing: 0,
    color: '#242733',
  },
  entryText: {
    width: widthRes(280),
    height: heightRes(44),
    fontFamily: 'Avenir',
    fontSize: 16,
    fontWeight: '500',
    color: '#242733',
  },
  emptyWrapper: {
    height: '100%',
    width: '100%',
    alignItems: 'center',
    alignContent: 'center',
  },
  emptyText: {
    marginTop: heightRes(200),
    width: widthRes(280),
    fontFamily: 'Futura',
    fontSize: 24,
    fontWeight: '900',
    textAlign: 'center',
    color: '#242733',
  },
  emptySubText: {
    marginTop: heightRes(20),
    width: widthRes(280),
    fontFamily: 'Futura',
    fontSize: 14,
    fontWeight: '900',
    textAlign: 'center',
    color: 'rgba(59, 73, 91, 0.68)',
  },
});

export default styles;
