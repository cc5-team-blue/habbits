import React from 'react';
import { Text, View, Image, StatusBar } from 'react-native';
import { connect } from 'react-redux';
import { NavigationActions } from 'react-navigation';

import { finishJournal, loseJournalPoint } from '../../helper';
import { setTotalPoints } from '../../actions';
import styles from '../../css/styleForJournal';
import sadRabbit from '../../images/sadRabbit.png';

export const journalFailure = ({ goToMain, uid, points }) => (
  <View style={styles.outerContainer}>
    <StatusBar barStyle="light-content" translucent />
    <Text style={[styles.innerHeadlineContainer, styles.headline]}>Aww Snap!</Text>
    <View style={styles.innerContentsContainer}>
      <View style={styles.failureContainer}>
        <Image style={styles.sadRabbitImg} source={sadRabbit} />
        <Text style={styles.forgotText}>
          You forgot to write a journal yesterday. I&#039;m disappointed.
        </Text>
        <Text style={styles.lostPointText}>You lost -100P</Text>
      </View>
      <View onTouchStart={() => goToMain(uid, points)} style={styles.sorryImgButton}>
        <Text style={styles.sorryButtonText}>I&#039;m Sorry!</Text>
      </View>
    </View>
  </View>
);

const mapStateToProps = state => ({
  uid: state.red.uid,
  points: state.red.totalPoints,
});

const mapDispatchToProps = dispatch => ({
  goToMain: (uid, points) => {
    let newPoints = points - 100;
    if (newPoints < 0) newPoints = 0;
    finishJournal(uid);
    loseJournalPoint(uid, newPoints);
    dispatch(setTotalPoints(newPoints));
    dispatch(NavigationActions.navigate({ routeName: 'Main' }));
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(journalFailure);
