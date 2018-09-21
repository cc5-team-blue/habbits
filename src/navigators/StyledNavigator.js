import { DrawerItems, SafeAreaView, NavigationActions } from 'react-navigation';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { StyleSheet, ScrollView, View, Text, Image } from 'react-native';
import journalIcon from '../images/journalImage.png';
import style from '../css/styleForNav';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

class SideMenu extends Component {
  navigateToScreen = route => () => {
    const navigateAction = NavigationActions.navigate({
      routeName: route,
    });
    this.props.navigation.dispatch(navigateAction);
  };

  render() {
    const { name } = this.props;
    return (
      <View style={styles.container}>
        <ScrollView>
          <View style={style.wrapper}>
            <Text style={style.header}>{name}</Text>
            <View style={style.navSectionStyle}>
              <Text style={style.navItemStyle} onPress={this.navigateToScreen('Analytics')}>
                <Image style={style.icon} source={journalIcon} />
                Journal Entries
              </Text>
              <Text style={style.navItemStyle} onPress={this.navigateToScreen('Analytics')}>
                Log Out
              </Text>
            </View>
          </View>
        </ScrollView>
        <View style={style.footerContainer}>
          <Text>Built with ♥ in Tokyo</Text>
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
});

const mapDispatchToProps = dispatch => ({});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SideMenu);
