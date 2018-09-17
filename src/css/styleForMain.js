import { StyleSheet } from 'react-native';
import { widthPercentageToDP, heightPercentageToDP } from './responsiveFunctions';

const styles = StyleSheet.create({
  container: {
    height: '100%',
    flexDirection: 'column',
    justifyContent: 'space-between',
    backgroundColor: '#3B495B',
  },
  headline: {
    paddingTop: heightPercentageToDP(55.5),
    paddingLeft: widthPercentageToDP(25),
    width: widthPercentageToDP(308),
    fontFamily: 'Futura',
    fontSize: 35,
    fontWeight: 'bold',
    color: '#ffffff',
  },
  wrapper: {
    marginTop: heightPercentageToDP(20),
    alignItems: 'center',
    marginLeft: widthPercentageToDP(24),
    marginRight: widthPercentageToDP(24),
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  item: {
    flex: 1,
  },
  habbitWrapper: {
    height: heightPercentageToDP(105),
    width: widthPercentageToDP(157),
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  right: {
    alignSelf: 'flex-end',
  },
  left: {
    alignSelf: 'flex-start',
  },
  habbitTextBar: {
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    width: widthPercentageToDP(157),
    height: heightPercentageToDP(40.5),
    backgroundColor: '#576371',
  },
  habbitText: {
    width: widthPercentageToDP(157),
    fontFamily: 'Futura',
    fontSize: 15,
    fontWeight: 'bold',
    color: '#dce0e6',
    textAlign: 'center',
  },
  sleepHabbitImage: {
    position: 'absolute',
    bottom: 0,
    marginLeft: widthPercentageToDP(26.5),
    width: widthPercentageToDP(104.5),
    height: heightPercentageToDP(72),
  },
  journalHabbitImage: {
    position: 'absolute',
    top: '30%',
    width: widthPercentageToDP(50.9),
    height: heightPercentageToDP(50.8),
    alignSelf: 'center',
    alignContent: 'center',
  },
  earlyStartImg: {
    borderRadius: 10,
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '115%',
  },
  analytics: {
    width: widthPercentageToDP(325),
    height: heightPercentageToDP(123.5),
    borderRadius: 10,
    marginTop: heightPercentageToDP(20),
  },
  analyticsImage: {
    position: 'absolute',
    top: 10,
    width: widthPercentageToDP(157),
    height: heightPercentageToDP(120),
  },
  analyticsText: {
    width: widthPercentageToDP(325),
    height: heightPercentageToDP(30),
    fontFamily: 'Futura',
    fontSize: 25,
    fontWeight: 'bold',
    fontStyle: 'normal',
    letterSpacing: 0,
    color: '#dce0e6',
    textAlign: 'center',
  },
  textBox: {
    height: heightPercentageToDP(41),
    alignItems: 'flex-end',
    position: 'absolute',
    bottom: 0,
  },
  achievements: {
    paddingTop: '4%',
    width: '100%',
  },
  achievementsText: {
    textAlign: 'left',
    width: widthPercentageToDP(225),
    height: heightPercentageToDP(26),
    fontFamily: 'Futura',
    fontSize: 20,
    fontWeight: 'bold',
    color: '#ffffff',
  },
  achievementsIconContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    marginBottom: heightPercentageToDP(20),
  },
  achievementsIcon: {
    marginTop: heightPercentageToDP(15),
    width: widthPercentageToDP(66),
    height: heightPercentageToDP(66),
    opacity: 0.71,
    borderRadius: 10,
    backgroundColor: '#626d7b',
  },
});

export default styles;
