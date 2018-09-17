import { StyleSheet } from 'react-native';
import { widthRes, heightRes } from './responsiveFunctions';

const styles = StyleSheet.create({
  container: {
    height: '100%',
    flexDirection: 'column',
    justifyContent: 'space-between',
    backgroundColor: '#3B495B',
  },
  headline: {
    paddingTop: heightRes(55.5),
    paddingLeft: widthRes(25),
    width: widthRes(308),
    fontFamily: 'Futura',
    fontSize: 35,
    fontWeight: 'bold',
    color: '#ffffff',
  },
  wrapper: {
    marginTop: heightRes(20),
    alignItems: 'center',
    marginLeft: widthRes(24),
    marginRight: widthRes(24),
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  item: {
    flex: 1,
  },
  habbitWrapper: {
    height: heightRes(105),
    width: widthRes(157),
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
    width: widthRes(157),
    height: heightRes(40.5),
    backgroundColor: '#576371',
  },
  habbitText: {
    width: widthRes(157),
    fontFamily: 'Futura',
    fontSize: 15,
    fontWeight: 'bold',
    color: '#dce0e6',
    textAlign: 'center',
  },
  sleepHabbitImage: {
    position: 'absolute',
    bottom: 0,
    marginLeft: widthRes(26.5),
    width: widthRes(104.5),
    height: heightRes(72),
  },
  journalHabbitImage: {
    position: 'absolute',
    top: '30%',
    width: widthRes(50.9),
    height: heightRes(50.8),
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
    width: widthRes(325),
    height: heightRes(123.5),
    borderRadius: 10,
    marginTop: heightRes(20),
  },
  analyticsImage: {
    position: 'absolute',
    top: 10,
    width: widthRes(157),
    height: heightRes(120),
  },
  analyticsText: {
    width: widthRes(325),
    height: heightRes(30),
    fontFamily: 'Futura',
    fontSize: 25,
    fontWeight: 'bold',
    fontStyle: 'normal',
    letterSpacing: 0,
    color: '#dce0e6',
    textAlign: 'center',
  },
  textBox: {
    height: heightRes(41),
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
    width: widthRes(225),
    height: heightRes(26),
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
    marginBottom: heightRes(20),
  },
  achievementsIcon: {
    marginTop: heightRes(15),
    width: widthRes(66),
    height: heightRes(66),
    opacity: 0.71,
    borderRadius: 10,
    backgroundColor: '#626d7b',
  },
});

export default styles;
