import { StyleSheet } from 'react-native';
import { widthRes, heightRes } from './responsiveFunctions';

const style = StyleSheet.create({
  wrapper: {
    flex: 1,
    margin: 20,
  },
  header: {
    fontSize: 30,
  },
  navSectionStyle: {
    marginTop: 30,
  },
  footerContainer: {
    margin: 20,
  },
  icon: {
    height: 18,
    width: 18,
  },
});

export default style;
