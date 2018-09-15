import React from 'react';
import { Text, View, Image, StatusBar } from 'react-native';
import { connect } from 'react-redux';
import { StackActions } from 'react-navigation';

export const journalSuccessBIG = ({ clickHabbit }) => (
  <View>
    <StatusBar barStyle="light-content" />
    <View>
      <View>
        <View>
          <Text>You are</Text>
          <Text>AWESOME!</Text>
        </View>
        <Image/>
        {/* <Text>{}/{}</Text> */}
        <Text>You gained +300P</Text>
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
)(journalSuccessBIG);
