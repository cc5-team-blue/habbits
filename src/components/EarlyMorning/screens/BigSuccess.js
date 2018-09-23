import React, { Component } from 'react';
import { Text, View, Image, StatusBar } from 'react-native';
import { connect } from 'react-redux';

import { app } from '../../../../db';
import { saveTimesToStore, setTotalPoints } from '../../../actions';
import happyRabbit from '../images/success.png';
import styles from '../styles/styleForBigSuccess';
import { getEarlyMorningPoints } from '../../../helper';

class BigSuccess extends Component {
  constructor(props) {
    super(props);
    this.state = {
      times: 0,
    };
  }

  async componentDidMount() {
    const { uid, updateClickTimes } = this.props;
    const ref = `users/${uid}/habits/early_morning`;
    const earlyMorning = app.database().ref(ref);

    await earlyMorning.once('value', data => {
      const result = data.toJSON();
      this.setState({ times: result.times });
      updateClickTimes(result.times);
    });
  }

  render() {
    const { times } = this.state;
    const { uid, points, handleClick, navigation } = this.props;

    return (
      <View style={styles.realContainer}>
        <StatusBar barStyle="light-content" />
        <View style={styles.container}>
          <View style={styles.yayImgContainer}>
            <View style={styles.awesomeWrapper}>
              <Text style={styles.youAreText}>You are</Text>
              <Text style={styles.awesomeText}>AWESOME!</Text>
            </View>
            <Image style={styles.happyRabbitImage} source={happyRabbit} />
            <Text style={styles.countText}>
              {times}
              /5
            </Text>
            <Text style={styles.pointText}>You gained +300P</Text>
          </View>
          <View onTouchStart={() => handleClick(uid, points, navigation)} style={styles.yayButton}>
            <Text style={styles.yayText}>Yay!</Text>
          </View>
        </View>
      </View>
    );
  }
}

const mapStateToProps = state => ({
  uid: state.red.uid,
  times: state.red.earlyTimes,
});

const mapDispatchToProps = dispatch => ({
  updateClickTimes: clickTime => {
    dispatch(saveTimesToStore(clickTime));
  },
  handleClick: (uid, points, navigation) => {
    const newPoints = points + 300;
    getEarlyMorningPoints(uid, newPoints);
    dispatch(setTotalPoints(newPoints));
    navigation.navigate('Loading');
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BigSuccess);
