import React, { Component } from 'react';
import { Text, StatusBar, View, Image } from 'react-native';
import { app } from '../../../../db';
import coffeeImg from '../images/coffee.png';
import styles from '../styles/styleForStart';

export default class Start extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: '',
    };
  }

  componentDidMount() {
    app.auth().onAuthStateChanged(user => {
      if (user) {
        this.setState({ user: user.uid });
      }
    });
  }

  handleClick = () => {
    if (this.state.user !== '') {
      const db = app.database();
      const ref = db.ref('users');
      const child = ref.child(`${this.state.user}/habits/early_morning`);
      child
        .update({
          tutorial: false,
          active: true,
          startDate: Date.now(),
          clickDate: 0,
          times: 0,
        })
        .then(this.props.navigation.navigate('MainScreen'));
    }
  };

  render() {
    return (
      <View style={styles.container}>
        <StatusBar barStyle="light-content" />
        <Text style={styles.header}>Early Start</Text>
        <View style={styles.wrapper}>
          <Image source={coffeeImg} style={styles.img} />
          <Text style={styles.title}>Description:</Text>
          <Text style={styles.text}>This modules helps you build an early morning habbit.</Text>
          <Text style={styles.title2}>Challenge:</Text>
          <Text style={styles.text2}>
            - 5-day challenge
            {'\n'}- Wake up before 6am
            {'\n'}- Don’t miss a single morning
            {'\n'}
            {'\n'}
          </Text>
          <View style={styles.btnWrapper}>
            <Text onPress={this.handleClick} style={styles.btn}>
              Bring it on
            </Text>
          </View>
        </View>
      </View>
    );
  }
}
