import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  // Common style
  bottomButtonText: {
    width: 272,
    height: 32.5,
    fontFamily: 'Futura',
    fontSize: 25,
    fontWeight: 'bold',
    fontStyle: 'normal',
    letterSpacing: 0,
    textAlign: 'center',
    color: '#ffffff',
  },
  bold: {
    fontWeight: 'bold',
  },
  // journalDescription
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#3B495B',
  },
  rectangleContainer: {
    flex: 7,
    width: 325,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    backgroundColor: '#fff7dd',
    shadowColor: '#3b495b',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  bottomButton: {
    width: 325,
    height: 67.5,
    borderBottomRightRadius: 10,
    borderBottomLeftRadius: 10,
    backgroundColor: '#ff575c',
    marginBottom: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  headline: {
    flex: 1,
    paddingTop: 60,
    width: 308,
    height: 91,
    fontFamily: 'Futura',
    fontSize: 35,
    fontWeight: 'bold',
    color: '#ffffff',
  },

  // Shared with journalMainScreen, journalSuccess, jounarlSuccessBIG
  outerContainer: {
    height: '100%',
    backgroundColor: '#3b495b',
  },
  innerContainer: {
    marginLeft: '6%',
    marginTop: '12%',
    height: '90%',
    width: '88%',
  },
  contentsContainer: {
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '95%',
  },
  bottomImgButton: {
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    backgroundColor: '#ff627a',
    alignItems: 'center',
    justifyContent: 'center',
    height: '10%',
  },
  // journalMainScreen
  journalInputBackground: {
    backgroundColor: '#fbfeff',
  },
  journalMainHeadline: {
    width: 267,
    height: 90,
    fontFamily: 'Futura',
    fontSize: 30,
    fontWeight: 'bold',
    color: '#242733',
  },
  journalMainText: {
    width: '100%',
    height: 20.5,
    fontFamily: 'Avenir',
    fontSize: 15,
    textAlign: 'left',
    color: '#3b495b',
  },
  journalInput: {
    width: 270,
    height: 45.5,
    borderRadius: 10,
    backgroundColor: '#ffffff',
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: '#151515',
    marginTop: 7,
    marginBottom: 7,
    padding: 12.5,
  },
  // Shared with jounalSuccess, journalSuccessBIG
  sucessBackground: {
    backgroundColor: '#fff7dd',
  },
  // journalSuccess
  successCommonText: {
    fontFamily: 'Futura',
    fontWeight: 'bold',
    fontStyle: 'normal',
    letterSpacing: 0,
    textAlign: 'center',
  },
  successText: {
    fontSize: 40,
    color: '#3b495b',
  },
  complimentText: {
    fontSize: 20,
    color: '#7a8185',
  },
  checkCircleImage: {
    width: 78.5,
    height: 78.5,
    marginTop: '25%',
    marginBottom: '25%',
  },
  progressText: {
    fontSize: 18,
    color: '#7a8185',
  },
  progressStats: {
    fontSize: 25,
    color: '#3b495b',
  },
  // journalSuccessBIG
  youAreText: {
    fontFamily: 'Futura',
    fontSize: 25,
    fontWeight: 'bold',
    fontStyle: 'normal',
    textAlign: 'center',
    color: 'rgba(59, 73, 91, 0.68)',
  },
  awesomeText: {
    fontFamily: 'Futura',
    fontSize: 42.5,
    fontWeight: 'bold',
    fontStyle: 'normal',
    color: '#3B495B',
  },
  happyRabbitImage: {
    width: 130,
    height: 219.5,
    marginTop: '10%',
    marginBottom: '12%',
  },
  statsText: {
    fontFamily: 'Futura',
    fontSize: 40,
    fontWeight: 'bold',
    fontStyle: 'normal',
    letterSpacing: 0,
    textAlign: 'center',
    color: '#3b495b',
  },
  pointsText: {
    fontFamily: 'Futura',
    fontSize: 25,
    fontWeight: 'bold',
    fontStyle: 'normal',
    textAlign: 'center',
    color: 'rgba(59, 73, 91, 0.68)',
    marginBottom: '5%',
  },
});

export default styles;
