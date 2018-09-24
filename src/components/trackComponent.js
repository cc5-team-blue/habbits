import React, { Component } from 'react';
import { Text, View, NetInfo, StyleSheet, Dimensions } from 'react-native';
import { connect } from 'react-redux';
import { updateConnectivity, appStateChange } from '../actions';

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
  offlineContainer: {
    backgroundColor: '#ffb94e',
    height: 25,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    width,
    position: 'absolute',
    top: 18,
  },
  offlineText: { color: '#fff' },
});

class AppStateExample extends Component {
  componentDidMount() {
    NetInfo.isConnected.addEventListener('connectionChange', this.handleConnectivityChange);
  }

  componentWillUnmount() {
    console.log('unmount trach detcting');
    NetInfo.isConnected.removeEventListener('connectionChange', this.handleConnectivityChange);
  }

  handleConnectivityChange = newConnection => {
    const { updateConnect } = this.props;
    console.log(newConnection);
    if (newConnection) updateConnect(newConnection);
    else updateConnect(newConnection);
  };

  render() {
    const { isConnected } = this.props;

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
