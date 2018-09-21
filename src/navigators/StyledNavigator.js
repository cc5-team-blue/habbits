import { DrawerItems, SafeAreaView, NavigationActions } from 'react-navigation';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { StyleSheet, ScrollView, View, Text, Image } from 'react-native';
import journalIcon from '../images/journalImage.png';
import habbitLogo from '../images/habbitLogo.png';
import logout from '../images/logout.png';
import style from '../css/styleForNav';

class SideMenu extends Component {
  navigateToScreen = route => () => {
    const navigateAction = NavigationActions.navigate({
      routeName: route,
    });
    this.props.navigation.dispatch(navigateAction);
  };

  render() {
    const { name, points } = this.props;
    return (
      <View style={style.container}>
        <ScrollView>
          <View style={style.wrapper}>
            <View style={style.logoWrapper}>
              <Image style={style.habbitLogo} source={habbitLogo} />
              <Text style={style.habbitText}>Habbits</Text>
            </View>
            <Text style={style.header}>{name}</Text>
            <Text style={style.points}>{points} Points</Text>
            <View style={style.navSectionStyle}>
              <Text style={style.navItemStyle} onPress={this.navigateToScreen('Analytics')}>
                <Image style={style.journalIcon} source={journalIcon} />
                <Text style={style.navText}> Journal Entries</Text>
              </Text>
              <Text style={style.navItemStyle} onPress={this.navigateToScreen('Analytics')}>
                <Image style={style.logoutIcon} source={logout} />
                <Text style={style.navText}> Log Out</Text>
              </Text>
            </View>
          </View>
        </ScrollView>
        <View style={style.footerContainer}>
          <Text style={{ color: 'white' }}>Built with ♥ in Tokyo</Text>
        </View>
      </View>
    );
  }
}

// const CustomDrawerContentComponent = props => (
//   <ScrollView>
//     <SafeAreaView style={styles.container} forceInset={{ top: 'always', horizontal: 'never' }}>
//       <Text>Hello World</Text>
//       <DrawerItems {...props} />
//     </SafeAreaView>
//   </ScrollView>
// );

const mapStateToProps = state => ({
  name: state.red.name,
  uid: state.red.uid,
  points: 0,
});

const mapDispatchToProps = dispatch => ({});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SideMenu);
