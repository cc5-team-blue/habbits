import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
    backgroundColor: '#3B495B',
  },
  lineChart: {
    marginTop: 20,
    marginLeft: 10,
  },
  valuesWrapper: {
    paddingLeft: 30,
    paddingRight: 30,
  },
  text: {
    fontFamily: 'Futura',
    fontSize: 20,
    fontWeight: 'bold',
    color: '#DCE0E6',
    textAlign: 'left',
  },
  unlocked: {
    fontFamily: 'Futura',
    fontSize: 15,
    fontWeight: 'bold',
    color: '#ffeaa7',
    marginLeft: 10,
  },
  achievement: {
    marginTop: 4,
    width: 71,
    height: 58,
    fontFamily: 'Futura',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'right',
    color: '#ffffff',
    marginRight: 15,
  },
  achievementWrapper: {
    width: 258.5,
    height: 71,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginLeft: 10,
    backgroundColor: '#eb5e65',
    borderRadius: 4,
  },
  achievementImg: {
    marginLeft: 18,
    width: 38,
    height: 42,
  },
  plus: {
    fontFamily: 'Futura',
    fontSize: 20,
    fontWeight: 'bold',
    color: '#00cec9',
    textAlign: 'right',
  },
  plusSign: {
    fontFamily: 'Futura',
    fontSize: 20,
    fontWeight: 'bold',
    color: '#00cec9',
    textAlign: 'right',
  },
  minus: {
    fontFamily: 'Futura',
    fontSize: 20,
    fontWeight: 'bold',
    color: '#ff7675',
    textAlign: 'right',
  },
  minusSign: {
    fontFamily: 'Futura',
    fontSize: 20,
    fontWeight: 'bold',
    color: '#ff7675',
    textAlign: 'right',
  },
  arrowUpImg: {
    width: 14,
    height: 14,
  },
  arrowDownImg: {
    width: 14,
    height: 14,
  },
  starImg: {
    width: 14,
    height: 14,
  },
  verticalArrowLine: {
    position: 'absolute',
    top: 210,
    height: 350,
    width: 38,
    borderRightWidth: 2,
    borderRightColor: '#576371',
  },
  headline: {
    paddingBottom: 10,
    paddingTop: 60,
    paddingLeft: 30,
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
    marginTop: 2.5,
    marginBottom: 2.5,
  },
});

export default styles;
