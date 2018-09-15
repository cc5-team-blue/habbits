import React from 'react';
import { Text, View, StatusBar } from 'react-native';
import { connect } from 'react-redux';
import { NavigationActions } from 'react-navigation';

export const journalDescription = ({ goToJournalSuccess }) => (
  <View>
    <StatusBar barStyle="light-content" />
    <View>
      <View>
        <Text>Hi Hiro, how was your day?</Text>
      </View>
      <View>
        <Text>Rate your day:</Text>
        {/* Rating star component */}
      </View>
      <View>
        <Text>One thing you&#039;re grateful for:</Text>
        {/* Text input component */}
      </View>
      <View>
        <Text>Something you&#039;ve learned today:</Text>
        {/* Text input component */}
      </View>
    </View>
    <View onTouchStart={goToJournalSuccess}>
      <Text>Submit!</Text>
    </View>
  </View>
);

const mapDispatchToProps = dispatch => ({
  goToJournalSuccess: () => {
    dispatch(NavigationActions.navigate({ routeName: 'JournalSuccess' }));
  },
});

export default connect(
  null,
  mapDispatchToProps
)(journalDescription);
