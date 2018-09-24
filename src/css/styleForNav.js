import { StyleSheet } from 'react-native';
import { widthRes, heightRes, imageRes } from './responsiveFunctions';

const style = StyleSheet.create({
  container: {
    flex: 1,
  },
  wrapper: {
    flex: 1,
    marginLeft: widthRes(20),
    marginTop: heightRes(20),
    marginRight: widthRes(20),
    marginBottom: heightRes(20),
  },
  logoWrapper: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    marginTop: heightRes(50),
  },
  habbitLogo: {
    width: widthRes(44),
    height: imageRes(58),
  },
  habbitText: {
    marginTop: heightRes(5),
    height: heightRes(19.5),
    fontFamily: 'Futura',
    fontSize: 14,
    fontWeight: 'bold',
    color: 'white',
  },
  header: {
    marginTop: heightRes(60),
    color: 'white',
    fontFamily: 'Futura',
    fontSize: 26,
    fontWeight: 'bold',
    fontStyle: 'normal',
  },
  points: {
    marginTop: heightRes(10),
    width: widthRes(101),
    height: heightRes(23),
    opacity: 0.6,
    fontFamily: 'Futura',
    fontSize: 18,
    fontWeight: 'bold',
    color: '#ffffff',
  },
  navSectionStyle: {
    marginTop: 60,
  },
  navItemStyle: {
    marginTop: heightRes(5),
    marginBottom: heightRes(5),
    height: heightRes(24.5),
  },
  footerContainer: {
    marginLeft: widthRes(20),
    marginBottom: heightRes(20),
    // color: 'white',
  },
  journalIcon: {
    height: imageRes(16),
    width: widthRes(16),
  },
  logoutIcon: {
    height: imageRes(16),
    width: widthRes(16),
  },
  navText: {
    paddingLeft: widthRes(10),
    fontFamily: 'Avenir',
    fontSize: 16,
    fontWeight: '500',
    color: '#ffffff',
  },
});

export default style;
