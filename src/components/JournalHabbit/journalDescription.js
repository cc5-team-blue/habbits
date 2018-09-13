import React from 'react';
import { Text, View, Image, StatusBar } from 'react-native';
import { connect } from 'react-redux';
import { StackActions } from 'react-navigation';

export const journalDescription = ({ clickHabbit }) => (
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
    <View onTouchStart={clickHabbit}>
      <Text>Bring it on!</Text>
    </View>
  </View>
);

const mapDispatchToProps = dispatch => ({
  clickHabbit: () => {
    dispatch(StackActions.push());
  },
});

export default connect(
  null,
  mapDispatchToProps
)(journalDescription);
