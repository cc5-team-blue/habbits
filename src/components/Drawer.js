import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { DrawerActions } from 'react-navigation';
// eslint-disable-next-line import/no-extraneous-dependencies
import Icon from 'react-native-vector-icons/FontAwesome';

export const Drawer = ({ openDrawer }) => (
  <View>
    <TouchableOpacity style={{ position: 'absolute', left: '88%', top: 52 }} onPress={openDrawer}>
      <Icon color="white" name="cog" size={20} />
    </TouchableOpacity>
  </View>
);

const mapDispatchToProps = dispatch => ({
  openDrawer: () => {
    dispatch(DrawerActions.openDrawer());
  },
});

export default connect(
  null,
  mapDispatchToProps
)(Drawer);
