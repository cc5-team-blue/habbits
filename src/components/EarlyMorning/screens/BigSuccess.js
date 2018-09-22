import React, { Component } from 'react';
import { Text, View, Image, StatusBar } from 'react-native';
import { connect } from 'react-redux';
import { app } from '../../../../db';
import { saveTimesToStore } from '../../../actions/index';
import happyRabbit from '../images/success.png';
import styles from '../styles/styleForBigSuccess';

class BigSuccess extends Component {
  constructor(props) {
    super(props);
    this.state = {
      times: 0,
    };
  }

  async componentDidMount() {
    const { uid, updateClickTimes } = this.props;
    await app
      .database()
      .ref(`users/${uid}/habits/early_morning/`)
      .on('value', data => {
        const result = data.toJSON();
        this.setState({ times: result.times });
        updateClickTimes(result.times);
      });
  }

  handleClick = () => {
    const { navigation } = this.props;
    navigation.navigate('Loading');
  };

  render() {
    const { times } = this.props;
    return (
      <View style={styles.realContainer}>
        <StatusBar barStyle="light-content" translucent />
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
          <View onTouchStart={this.handleClick} style={styles.yayButton}>
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
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BigSuccess);
