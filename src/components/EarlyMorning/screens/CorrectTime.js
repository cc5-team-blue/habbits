import React, { Component } from 'react';
import { Text, View, StatusBar, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { app } from '../../../../db';
import styles from '../styles/styleForCorrectTime';

class CorrectTime extends Component {
  constructor(props) {
    super(props);
    this.state = {
      uid: this.props.uid,
      times: 0,
    };
  }

  async componentDidMount() {
    const db = app.database();
    const ref = db.ref('users');
    const user = ref.child(this.state.uid);
    const habits = user.child('habits');
    const earlyMorning = habits.child('early_morning');

    await earlyMorning.on('value', data => {
      const result = data.toJSON();
      this.setState({
        times: result.times,
      });
    });
  }

  handleClick = () => {
    const db = app.database();
    const ref = db.ref('users');
    const user = ref.child(this.state.uid);
    const habits = user.child('habits');
    const earlyMorning = habits.child('early_morning');

    earlyMorning.update({ times: this.state.times + 1, clickDate: Date.now() });
    this.props.navigation.navigate('Success');
  };

  render() {
    // correct time
    return (
      <View style={styles.container}>
        <StatusBar barStyle="light-content" />
        <Text style={styles.header}>Early Start</Text>
        <View style={styles.wrapper}>
          <Text style={styles.text}>Good Morning Handsome!</Text>
          <View>
            <TouchableOpacity onPress={this.handleClick}>
              <View style={styles.img} />
            </TouchableOpacity>
          </View>
          <Text style={styles.text2}>PUSH ME</Text>
        </View>
      </View>
    );
  }
}

const mapStateToProps = state => ({
  uid: state.red.uid,
});

export default connect(
  mapStateToProps,
  null
)(CorrectTime);
