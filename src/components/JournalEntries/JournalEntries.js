import React, { Component } from 'react';
import { Text, View, Image, ScrollView, StatusBar } from 'react-native';
import { connect } from 'react-redux';
import moment from 'moment';
import _ from 'underscore';

import star from '../../images/star.png';
import styles from '../../css/styleForJournalEntries';
import { app } from '../../../db';
import ExitButton from '../ExitButton';

class CountdownToOffline extends Component {
  constructor(props) {
    super(props);
    this.state = {
      entries: [],
    };
  }

  async componentDidMount() {
    const { uid } = this.props;
    const journalPath = `users/${uid}/habits/JournalHabbit/journals`;
    const journalsFromFB = await app.database().ref(journalPath);
    journalsFromFB.once('value', data => {
      const journalObj = data.val();
      if (journalObj) {
        const journalsArr = Object.values(journalObj);
        /* eslint-disable */
        journalsArr.reverse().map((elem, i) => {
          elem.date = moment(elem.date).format('dddd, MMM DD');
          elem.id = i;
        });
        /* eslint-disable */
        this.setState({ entries: journalsArr });
      }
    });
  }

  render() {
    const { entries } = this.state;

    if (entries.length === 0) {
      return (
        <View style={styles.container}>
          <StatusBar barStyle="light-content" />
          <View style={styles.wrapper}>
            <View style={styles.headlineWrapper}>
              <Text style={styles.headline}>Your Journal</Text>
              <View style={{ marginTop: -40 }}>
                <ExitButton />
              </View>
            </View>
            <View style={styles.rectangleContainer}>
              <View style={styles.emptyWrapper}>
                <Text style={styles.emptyText}>Nothing here.</Text>
                <Text style={styles.emptySubText}>
                  Start the 30-day journal challenge and store your thoughts here.
                </Text>
              </View>
            </View>
          </View>
        </View>
      );
    } else {
      return (
        <View style={styles.container}>
          <StatusBar barStyle="light-content" />
          <View style={styles.wrapper}>
            <View style={styles.headlineWrapper}>
              <Text style={styles.headline}>Your Journal</Text>
              <View style={{ marginTop: -40 }}>
                <ExitButton />
              </View>
            </View>
            <View style={styles.rectangleContainer}>
              <ScrollView style={styles.entriesWrapper} showsVerticalScrollIndicator={false}>
                {entries.map(item => (
                  <View key={item.id} style={styles.row}>
                    <View style={styles.dateStarRow}>
                      <Text style={styles.date}>{item.date}</Text>
                      <View style={styles.ratingWrapper}>
                        {_.times(item.rating, e => (
                          <Image key={e} source={star} style={styles.rating} />
                        ))}
                      </View>
                    </View>
                    <View style={styles.entryRow}>
                      <Text style={styles.entryHeadline}>Grateful</Text>
                      <Text style={styles.entryText}>{item.grateful}</Text>
                    </View>
                    <View style={styles.entryRow}>
                      <Text style={styles.entryHeadline}>Learned</Text>
                      <Text style={styles.entryText}>{item.til}</Text>
                    </View>
                  </View>
                ))}
              </ScrollView>
            </View>
          </View>
        </View>
      );
    }
  }
}

const mapStateToProps = state => ({
  uid: state.red.uid,
});

export default connect(
  mapStateToProps,
  null
)(CountdownToOffline);
