import React from 'react';
import { Text, View, Image, StatusBar } from 'react-native';
import { connect } from 'react-redux';
import { NavigationActions } from 'react-navigation';

import { setStartAndEndDate } from '../../helper';
import styles from '../../css/styleForJournal';
import journalImg from '../../images/journalImage.png';
import Exit from '../ExitButton';

export const journalDescription = ({ uid, goToJournalMain }) => (
  <View style={styles.outerContainer}>
    <StatusBar barStyle="light-content" translucent />
    <View style={styles.headlineWrapper}>
      <Text style={styles.header}>Daily Journal</Text>
      <Exit />
    </View>
    <View style={styles.innerContentsContainer}>
      <View style={styles.descriptionContainer}>
        <Image style={styles.journalImg} source={journalImg} />
        <View style={styles.textPosition}>
          <Text style={styles.h2Text}>Description:</Text>
          <Text style={styles.h3Text}>
            This module helps you keep a journal for 30 consecutive days.
          </Text>
        </View>
        <View>
          <Text style={styles.h2Text}>Challenge:</Text>
          <Text style={styles.h3Text}>- 30-day challenge</Text>
          <Text style={styles.h3Text}>- Answer 3 questions per day</Text>
          <Text style={styles.h3Text}>- Don&#039;t miss a single day</Text>
        </View>
      </View>
      <View onTouchStart={() => goToJournalMain(uid)} style={styles.bringImgButton}>
        <Text style={styles.bottomButtonText}>Bring it on!</Text>
      </View>
    </View>
  </View>
);

const mapStateToProps = state => ({
  uid: state.red.uid,
});

const mapDispatchToProps = dispatch => ({
  goToJournalMain: data => {
    setStartAndEndDate(data);
    dispatch(NavigationActions.navigate({ routeName: 'JournalMainScreen' }));
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(journalDescription);
