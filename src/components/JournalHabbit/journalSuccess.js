import React from 'react';
import { Text, View, Image, StatusBar } from 'react-native';
import { connect } from 'react-redux';
import { NavigationActions } from 'react-navigation';

import { finishJournal } from '../../helper';
import styles from '../../css/styleForJournal';
import checkCircle from '../../images/check-circle.png';

export const journalSuccess = ({ goToMain, uid }) => (
  <View style={styles.outerContainer}>
    <StatusBar barStyle="light-content" />
    <View style={styles.innerContainer}>
      <View style={[styles.contentsContainer, styles.sucessBackground, styles.successItemPosition]}>
        <View>
          <Text style={[styles.successCommonText, styles.successText]}>Success!</Text>
          <Text style={[styles.successCommonText, styles.complimentText]}>
            You are so thoughtful!
          </Text>
        </View>
        <Image style={styles.checkCircleImage} source={checkCircle} />
        <View>
          <Text style={[styles.successCommonText, styles.progressText]}>Challenge Progress:</Text>
          <Text style={[styles.successCommonText, styles.progressStats]}>5/30</Text>
        </View>
      </View>
      <View onTouchStart={() => goToMain(uid)} style={styles.bottomImgButton}>
        <Text style={styles.bottomButtonText}>Yay!</Text>
      </View>
    </View>
  </View>
);

const mapStateToProps = state => ({
  uid: state.red.uid,
});

const mapDispatchToProps = dispatch => ({
  goToMain: uid => {
    // For production: finishJournal() should be commentout, it's using for testing.
    finishJournal(uid);
    dispatch(NavigationActions.navigate({ routeName: 'Main' }));
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(journalSuccess);
