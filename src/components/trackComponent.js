import React, { Component } from 'react';
import {
  AppState,
  Text,
  View,
  TouchableOpacity,
  Alert,
  Button,
  NetInfo,
  StyleSheet,
  Dimensions,
} from 'react-native';
import { NavigationActions } from 'react-navigation';
import { connect } from 'react-redux';

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
  offlineContainer: {
    backgroundColor: '#b52424',
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    width,
    position: 'absolute',
    top: 30,
  },
  offlineText: { color: '#fff' },
});

class AppStateExample extends Component {
  state = {
    appState: AppState.currentState,
    isConnected: true,
  };

  componentDidMount() {
    AppState.addEventListener('change', this.handleAppStateChange);
    NetInfo.isConnected.addEventListener('connectionChange', this.handleConnectivityChange);
  }

  // shouldComponentUpdate;

  componentWillUnmount() {
    AppState.removeEventListener('change', this.handleAppStateChange);
    NetInfo.isConnected.removeEventListener('connectionChange', this.handleConnectivityChange);
  }

  handleAppStateChange = nextAppState => {
    const { appState } = this.state;
    if (appState.match(/inactive|background/) && nextAppState === 'active') {
      console.log('App has come to the foreground!');
    }
    this.setState({ appState: nextAppState });
  };

  handleConnectivityChange = isConnected => {
    if (isConnected) {
      this.setState({ isConnected });
    } else {
      this.setState({ isConnected });
    }
  };

  render() {
    const { appState, isConnected } = this.state;
    const { clickHabbit } = this.props;
    if (appState === 'background') {
      console.log(appState);
      return <Text style={{ marginTop: 60 }}>Good Bye bro</Text>;
    }
    if (!isConnected) {
      console.log('internet', isConnected);
      return (
        <View style={styles.offlineContainer}>
          <Text style={styles.offlineText}>No Internet Connection</Text>
        </View>
      );
    }
    return (
      <View>
        <Text style={{ marginTop: 60 }}>Current state is: {appState}</Text>;
        <TouchableOpacity>
          <Button onPress={clickHabbit} title="dismiss button to Home" />
        </TouchableOpacity>
      </View>
    );
  }
}

// const mapStateToProps = state => ({
//   tsuyoshi: state.redsampleData1,
// });

const mapDispatchToProps = dispatch => ({
  clickHabbit: () => {
    Alert.alert(
      'Are you OK to give up?',
      'No points, No life',
      [
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        {
          text: 'OK',
          onPress: () => dispatch(NavigationActions.navigate({ routeName: 'Home' })),
        },
      ],
      { cancelable: true }
    );
  },
});

export default connect(
  null,
  mapDispatchToProps
)(AppStateExample);
