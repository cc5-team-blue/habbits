import React from 'react';
import { Text, View, Image, StatusBar } from 'react-native';
import { connect } from 'react-redux';
import { NavigationActions } from 'react-navigation';

import { setStartAndEndDate } from '../../helper';

export const journalDescription = ({ goToJournalMain }) => (
  <View>
    <StatusBar barStyle="light-content" />
    <Text>Daily Journal</Text>
    <View>
      <Image />
      <View>
        <Text>Description:</Text>
        <Text>This modules helps you kep a journal for 30 consecutive days.</Text>
      </View>
      <View>
        <Text>Challenge:</Text>
        <Text>- 30-day challenge</Text>
        <Text>- Answer 3 questions per day</Text>
        <Text>- Don&#039;t miss a single day</Text>
      </View>
    </View>
    <View onTouchStart={goToJournalMain}>
      <Text>Bring it on!</Text>
    </View>
  </View>
);

const mapDispatchToProps = dispatch => ({
  goToJournalMain: () => {
    setStartAndEndDate();
    dispatch(NavigationActions.navigate({ routeName: 'JournalMainScreen' }));
  },
});

export default connect(
  null,
  mapDispatchToProps
)(journalDescription);
