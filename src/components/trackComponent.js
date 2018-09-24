import React, { Component } from 'react';
import { AppState, Text, View, NetInfo, StyleSheet, Dimensions } from 'react-native';
import { connect } from 'react-redux';
import { updateConnectivity, appStateChange } from '../actions';

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
  offlineContainer: {
    backgroundColor: '#808000',
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    width,
    position: 'absolute',
    top: 17,
  },
  offlineText: { color: '#fff' },
});

class AppStateExample extends Component {
  componentDidMount() {
    AppState.addEventListener('change', this.handleAppStateChange);
    NetInfo.isConnected.addEventListener('connectionChange', this.handleConnectivityChange);
  }

  componentWillUnmount() {
    AppState.removeEventListener('change', this.handleAppStateChange);
    NetInfo.isConnected.removeEventListener('connectionChange', this.handleConnectivityChange);
  }

  handleAppStateChange = nextAppState => {
    const { state, updateAppState } = this.props;
    if (state.match(/inactive|background/) && nextAppState === 'active') {
      console.log('App has come to the foreground!');
    }
    updateAppState(nextAppState);
  };

  handleConnectivityChange = isConnected => {
    const { updateConnect } = this.props;
    if (isConnected) updateConnect(isConnected);
    else updateConnect(isConnected);
  };

  render() {
    const { state, isConnected } = this.props;
    if (state === 'background') {
      console.log(`state is ${state}`);
      return <Text style={{ marginTop: 110, backgroundColor: 'white' }}>Good Bye bro</Text>;
    }
    if (!isConnected) {
      console.log('internet', isConnected);
      return (
        <View style={styles.offlineContainer}>
          <Text style={styles.offlineText}>No Internet Connection</Text>
        </View>
      );
    }
    return <View />;
  }
}

const mapStateToProps = state => ({
  isConnected: state.red.isConnected,
  state: state.red.appState,
});

const mapDispatchToProps = dispatch => ({
  updateConnect: newConnectionState => {
    dispatch(updateConnectivity(newConnectionState));
  },
  updateAppState: newAppState => {
    dispatch(appStateChange(newAppState));
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AppStateExample);
