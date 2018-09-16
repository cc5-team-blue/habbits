import React from 'react';
import { Text, View, Image, StatusBar } from 'react-native';
import { connect } from 'react-redux';
import { NavigationActions } from 'react-navigation';

import { finishJournal } from '../../helper';
import styles from '../../css/styleForJournal';
import checkCircle from '../../images/check-circle.png';

export const journalSuccess = ({ goToMain }) => (
  <View style={styles.outerContainer}>
    <StatusBar barStyle="light-content" />
    <View style={styles.innerContainer}>
      <View style={[styles.contentsContainer, styles.sucessBackground]}>
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
      <View onTouchStart={goToMain} style={styles.bottomImgButton}>
        <Text style={styles.bottomButtonText}>Yay!</Text>
      </View>
    </View>
  </View>
);

const mapDispatchToProps = dispatch => ({
  goToMain: () => {
    finishJournal();
    dispatch(NavigationActions.navigate({ routeName: 'Main' }));
  },
});

export default connect(
  null,
  mapDispatchToProps
)(journalSuccess);
