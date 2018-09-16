import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  // Common style
  outerContainer: {
    height: '100%',
    backgroundColor: '#3b495b',
  },
  bottomImgButton: {
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    backgroundColor: '#ff627a',
    alignItems: 'center',
    justifyContent: 'center',
    height: '10%',
  },
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
  journalImg: {
    width: 79.5,
    height: 79.5,
  },
  innerHeadlineContainer: {
    marginLeft: '6%',
    marginTop: '13%',
    height: '8%',
    width: '88%',
  },
  innerContentsContainer: {
    marginLeft: '6%',
    marginTop: '0%',
    height: '80%',
    width: '88%',
  },
  descriptionContainer: {
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '89%',
    backgroundColor: '#fff7dd',
  },
  headline: {
    fontFamily: 'Futura',
    fontSize: 35,
    fontWeight: 'bold',
    color: '#ffffff',
  },
  bringImgButton: {
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    backgroundColor: '#ff627a',
    alignItems: 'center',
    justifyContent: 'center',
    height: '11%',
  },
  h2Text: {
    marginTop: '10%',
    fontFamily: 'Futura',
    fontSize: 30,
    fontWeight: 'bold',
    fontStyle: 'normal',
    letterSpacing: 0,
    color: '#3b495b',
  },
  h3Text: {
    fontFamily: 'Avenir',
    fontSize: 16,
    fontWeight: '900',
    fontStyle: 'normal',
    letterSpacing: 0,
    color: '#3b495b',
  },
  textPosition: {
    marginLeft: '14%',
    marginRight: '8%',
  },
  // Shared with journalMainScreen, journalSuccess, jounarlSuccessBIG
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
    // alignItems: 'center',
    width: '100%',
    height: '95%',
  },
  // journalMainScreen
  mainItemPosition: {
    alignItems: 'flex-start',
  },
  journalInputBackground: {
    backgroundColor: '#fbfeff',
  },
  journalMainHeadline: {
    width: '80%',
    fontFamily: 'Futura',
    fontSize: 30,
    fontWeight: 'bold',
    color: '#242733',
    marginLeft: '8%',
  },
  journalMainText: {
    width: '80%',
    fontFamily: 'Avenir',
    fontSize: 16,
    fontWeight: '500',
    fontStyle: 'normal',
    letterSpacing: 0,
    color: '#151515',
    marginTop: '10%',
    marginLeft: '8%',
    alignItems: 'flex-start',
  },
  itemPosition: {
    alignItems: 'flex-start',
    width: '80%',
    marginLeft: '8%',
  },
  journalInput: {
    width: 280,
    height: 45.5,
    borderRadius: 10,
    backgroundColor: '#ffffff',
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: '#151515',
    marginTop: 7,
    marginBottom: 7,
    padding: 12.5,
    alignItems: 'center',
  },
  // Shared with jounalSuccess, journalSuccessBIG
  sucessBackground: {
    backgroundColor: '#fff7dd',
  },
  successItemPosition: {
    alignItems: 'center',
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
