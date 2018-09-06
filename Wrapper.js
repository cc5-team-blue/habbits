import React, { Component } from 'react';
import { StyleSheet, View, StatusBar } from 'react-native';
import { connect } from 'react-redux';
import SampleComponent from './src/components/SampleComponent';
import SuccessRabbit from './src/components/SuccessRabbit';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#3B495B',
  },
});

class Wrapper extends Component {
  componentDidMount() {}

  render() {
    const { rabbit } = this.props;
    if (!rabbit) {
      return (
        <View style={styles.container}>
          <StatusBar barStyle="light-content" />
          <SampleComponent />
        </View>
      );
    }
    return (
      <View style={styles.container}>
        <StatusBar barStyle="light-content" />
        {/* <SampleComponent /> */}
        <SuccessRabbit />
      </View>
    );
  }
}

const mapStateToProps = state => ({
  rabbit: state.isClickedRabbit,
});

export default connect(
  mapStateToProps,
  null
)(Wrapper);
