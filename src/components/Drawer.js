import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { DrawerActions } from 'react-navigation';
import IOSIcon from 'react-native-vector-icons/Ionicons';

export const Drawer = ({ clickHabbit }) => (
  <View>
    <TouchableOpacity style={{ position: 'absolute', left: '88%', top: 52 }} onPress={clickHabbit}>
      <IOSIcon color="white" name="ios-menu" size={41} />
    </TouchableOpacity>
  </View>
);

const mapDispatchToProps = dispatch => ({
  clickHabbit: () => {
    console.log('Hello Michael');
    dispatch(DrawerActions.openDrawer());
  },
});

export default connect(
  null,
  mapDispatchToProps
)(Drawer);
