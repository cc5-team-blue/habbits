import React from 'react';
import { StyleSheet, Text, View, Image, Button } from 'react-native';
import { connect } from 'react-redux';
import { anotherAction, clickedRabbit } from '../actions';
import happyRabbit from '../images/happyRabbit.png';

const styles = StyleSheet.create({
  container: {
    marginLeft: '6%',
    marginTop: '12%',
    height: '90%',
    width: '88%',
  },
  awesomeWrapper: {
    paddingTop: 0,
    marginBottom: '10%',
  },
  youAreText: {
    fontFamily: 'Futura',
    fontSize: 25,
    fontWeight: 'bold',
    fontStyle: 'normal',
    textAlign: 'center',
    color: 'rgba(59, 73, 91, 0.68)',
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
  awesomeText: {
    fontFamily: 'Futura',
    fontSize: 42.5,
    fontWeight: 'bold',
    fontStyle: 'normal',
    color: '#3B495B',
  },
  happyRabbitImage: {
    width: 155,
    height: 262,
    marginBottom: '12%',
  },
  yayImgContainer: {
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '95%',
    backgroundColor: '#ffe5d8',
  },
  yayButton: {
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    backgroundColor: '#ff627a',
    alignItems: 'center',
    justifyContent: 'center',
    height: '10%',
  },
  yayText: {
    fontFamily: 'Futura',
    fontSize: 25,
    fontWeight: 'bold',
    fontStyle: 'normal',
    letterSpacing: 0,
    color: '#ffffff',
  },
});

export const SampleComponent = ({ clickHabbit, clickYay }) => (
  <View style={styles.container}>
    <View style={styles.yayImgContainer}>
      <View style={styles.awesomeWrapper}>
        <Text style={styles.youAreText}>You are</Text>
        <Text style={styles.awesomeText}>AWESOME!</Text>
      </View>
      <Image style={styles.happyRabbitImage} source={happyRabbit} />
      <Text style={styles.pointsText}>You gained +300P</Text>
    </View>
    <View onTouchStart={clickHabbit} style={styles.yayButton}>
      <Text style={styles.yayText} onTouchStart={clickYay}>
        Yay!
      </Text>
    </View>
  </View>
);

const mapStateToProps = state => ({
  tsuyoshi: state.sampleData1,
  hiro: state.sampleData2,
  nour: state.sampleData3,
  michael: state.sampleData4,
});

const mapDispatchToProps = dispatch => ({
  changeMichael: () => {
    dispatch(anotherAction('Michael'));
  },
  clickYay: () => {
    dispatch(clickedRabbit(false));
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SampleComponent);
