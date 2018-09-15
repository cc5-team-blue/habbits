import React from 'react';
import { Text, View, Image, StatusBar } from 'react-native';
import { connect } from 'react-redux';
import { NavigationActions } from 'react-navigation';

export const journalSuccess = ({ goToMain }) => (
  <View>
    <StatusBar barStyle="light-content" />
    <View>
      <View>
        <View>
          <Text>Success!</Text>
          <Text>You are so thoughtful!</Text>
        </View>
        <Image/>
        <View>
          <Text>Challenge Progress:</Text>
          {/* <Text>{}/{}</Text> */}
        </View>
      </View>
      <View onTouchStart={goToMain}>
        <Text>Yay!</Text>
      </View>
    </View>
  </View>
);

const mapDispatchToProps = dispatch => ({
  goToMain: () => {
    dispatch(NavigationActions.navigate({ routeName: 'Main' }));
  },
});

export default connect(
  null,
  mapDispatchToProps
)(journalSuccess);
