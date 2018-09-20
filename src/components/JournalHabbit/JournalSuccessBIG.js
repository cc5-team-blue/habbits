import React from 'react';
import { Text, View, Image, StatusBar } from 'react-native';
import { connect } from 'react-redux';
import { NavigationActions } from 'react-navigation';

import { finishJournal, getJournalPoint } from '../../helper';
import styles from '../../css/styleForJournal';
import happyRabbit from '../../images/happyRabbit.png';

export const journalSuccessBIG = ({ goToMain, uid }) => (
  <View style={styles.outerContainer}>
    <StatusBar barStyle="light-content" />
    <View style={styles.innerContainer}>
      <View style={[styles.contentsContainer, styles.sucessBackground, styles.successItemPosition]}>
        <View>
          <Text style={styles.youAreText}>You are</Text>
          <Text style={styles.awesomeText}>AWESOME!</Text>
        </View>
        <Image style={styles.happyRabbitImage} source={happyRabbit} />
        <Text style={styles.statsText}>30/30</Text>
        <Text style={styles.pointsText}>You gained +300P</Text>
      </View>
      <View onTouchStart={() => goToMain(uid)} style={styles.bottomImgButton}>
        <Text style={styles.bottomButtonText}>Yay!</Text>
      </View>
    </View>
  </View>
);

const mapDispatchToProps = dispatch => ({
  goToMain: uid => {
    finishJournal(uid);
    getJournalPoint(uid);
    dispatch(NavigationActions.navigate({ routeName: 'Main' }));
  },
});

export default connect(
  null,
  mapDispatchToProps
)(journalSuccessBIG);
