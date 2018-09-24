import { StyleSheet } from 'react-native';
import { widthRes, heightRes, imageRes } from './responsiveFunctions';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#3B495B',
  },
  headline: {
    paddingTop: heightRes(60),
    paddingLeft: widthRes(30),
    flex: 1,
    width: widthRes(325),
    height: heightRes(45.5),
    fontFamily: 'Futura',
    fontSize: 35,
    fontWeight: 'bold',
    fontStyle: 'normal',
    letterSpacing: 0,
    color: '#ffffff',
    alignSelf: 'flex-start',
    bottom: 0,
  },
  rectangle3: {
    flex: 7,
    width: widthRes(325),
    height: heightRes(527.5),
    borderRadius: 10,
    backgroundColor: '#eb5e65',
    shadowColor: '#3B495B',
    marginBottom: '7%',
  },
  timer: {
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  habbitImage: {
    position: 'absolute',
    bottom: 0,
    marginLeft: widthRes(85),
    width: widthRes(152),
    height: imageRes(104),
  },
});

export default styles;
