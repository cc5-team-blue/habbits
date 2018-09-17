import { StyleSheet } from 'react-native';
import { widthRes, heightRes } from './responsiveFunctions';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
    backgroundColor: '#3B495B',
  },
  lineChart: {
    marginTop: heightRes(20),
    marginLeft: widthRes(10),
  },
  valuesWrapper: {
    paddingLeft: widthRes(30),
    paddingRight: widthRes(30),
  },
  text: {
    fontFamily: 'Avenir',
    fontSize: 16,
    fontWeight: 'bold',
    color: '#DCE0E6',
    textAlign: 'left',
  },
  habbitDescription: {
    color: '#6F829D',
    paddingLeft: widthRes(30),
  },
  unlocked: {
    fontFamily: 'Avenir',
    fontSize: 16,
    fontWeight: 'bold',
    color: '#ffeaa7',
    marginLeft: widthRes(10),
  },
  achievement: {
    marginTop: heightRes(4),
    width: widthRes(71),
    height: heightRes(48),
    fontFamily: 'Futura',
    fontSize: heightRes(15),
    fontWeight: 'bold',
    textAlign: 'right',
    color: '#ffffff',
    marginRight: widthRes(15),
  },
  achievementWrapper: {
    width: widthRes(258.5),
    height: heightRes(58),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginLeft: widthRes(10),
    backgroundColor: '#eb5e65',
    borderRadius: 4,
  },
  achievementImg: {
    marginLeft: widthRes(18),
    width: widthRes(31.5),
    height: heightRes(36),
  },
  plus: {
    fontFamily: 'Avenir',
    fontSize: 16,
    fontWeight: 'bold',
    color: '#00cec9',
    textAlign: 'right',
  },
  green: {
    color: '#00cec9',
  },
  minus: {
    fontFamily: 'Avenir',
    fontSize: 16,
    fontWeight: 'bold',
    color: '#ff7675',
    textAlign: 'right',
  },
  red: {
    color: '#ff7675',
  },
  arrowUpImg: {
    width: widthRes(14),
    height: heightRes(14),
  },
  arrowDownImg: {
    width: widthRes(14),
    height: heightRes(14),
  },
  starImg: {
    width: widthRes(14),
    height: heightRes(14),
  },
  verticalArrowLine: {
    position: 'absolute',
    width: widthRes(38),
    borderRightWidth: 2,
    borderRightColor: '#576371',
  },
  headline: {
    paddingBottom: heightRes(10),
    paddingTop: heightRes(60),
    paddingLeft: widthRes(30),
    fontFamily: 'Futura',
    fontSize: 35,
    fontWeight: 'bold',
    color: '#ffffff',
  },
  wrapper: {
    flex: 3,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: heightRes(2.5),
    marginBottom: heightRes(2.5),
  },
});

export default styles;
