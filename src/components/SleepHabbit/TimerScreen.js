import React from 'react';
import { Text, View, Image, StatusBar } from 'react-native';
import Timer from './Timer';
import sleepHabbitImg from '../../images/rabbitSmall.png';
import styles from '../../css/styleForSleepTimer';

const TimerScreen = () => (
  <View style={styles.container}>
    <StatusBar barStyle="light-content" translucent />
    <Text style={styles.headline}>Sleep Timer</Text>
    <View style={styles.rectangle3}>
      <Timer style={styles.timer} />
      <Image style={styles.habbitImage} source={sleepHabbitImg} />
    </View>
  </View>
);

export default TimerScreen;
