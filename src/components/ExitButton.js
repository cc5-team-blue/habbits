import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { NavigationActions } from 'react-navigation';
// eslint-disable-next-line import/no-extraneous-dependencies
import Icon from 'react-native-vector-icons/FontAwesome';

const Exit = ({ goBackToHome }) => (
  <View
    style={{
      paddingBottom: 10,
      marginTop: 50,
      paddingRight: 27,
      alignItems: 'flex-end',
    }}
  >
    <TouchableOpacity onPress={goBackToHome}>
      <Icon color="white" name="times" size={24} />
    </TouchableOpacity>
  </View>
);

const mapDispatchToProps = dispatch => ({
  goBackToHome: () => {
    console.log('exit is clicked here');
    dispatch(NavigationActions.navigate({ routeName: 'Main' }));
  },
});

export default connect(
  null,
  mapDispatchToProps
)(Exit);
