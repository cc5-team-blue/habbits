import React from 'react';
import { Text, View, Image, StatusBar } from 'react-native';
import { connect } from 'react-redux';
import { StackActions } from 'react-navigation';

export const journalSuccess = ({ clickHabbit }) => (
  <View>
    <StatusBar barStyle="light-content" />
    <View>
      <View>
        <View>
          <Text>Success!</Text>
          <Text>You are so thoughtful!</Text>
        </View>
        <Image />
        <View>
          <Text>Challenge Progress:</Text>
          {/* <Text>{}/{}</Text> */}
        </View>
      </View>
      <View onTouchStart={clickHabbit}>
        <Text>Yay!</Text>
      </View>
    </View>
  </View>
);

const mapDispatchToProps = dispatch => ({
  clickHabbit: () => {
    dispatch(StackActions.popToTop());
  },
});

export default connect(
  null,
  mapDispatchToProps
)(journalSuccess);
