import React, { Component } from 'react';
import { Text, View, Image, ScrollView, StatusBar } from 'react-native';
import { connect } from 'react-redux';
import moment from 'moment';
import _ from 'underscore';
import star from '../../images/star.png';
import styles from '../../css/styleForJournalEntries';

class CountdownToOffline extends Component {
  componentDidMount() {
    // get journal entries from Firebase
  }

  render() {
    const { entries } = this.props;
    return (
      <View style={styles.container}>
        <StatusBar barStyle="light-content" />
        <View style={styles.wrapper}>
          <Text style={styles.headline}>Your Journal</Text>
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
                    <Text style={styles.entryHeadline}>Greatful</Text>
                    <Text style={styles.entryText}>{item.greatful}</Text>
                  </View>
                  <View style={styles.entryRow}>
                    <Text style={styles.entryHeadline}>Learned</Text>
                    <Text style={styles.entryText}>{item.learned}</Text>
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

const mapStateToProps = state => ({
  entries: [
    {
      id: 1,
      date: 'Tuesday, 04/09',
      rating: 3,
      greatful: 'I’m happy to have my friends who support me every single day.',
      learned: 'TIL: Apple is very slow in processes its certificates. I’m now waiting for 3 days.',
    },
    {
      id: 2,
      date: 'Tuesday, 04/09',
      rating: 5,
      greatful: 'I’m happy to have my friends who support me every single day.',
      learned: 'TIL: Apple is very slow in processes its certificates. I’m now waiting for 3 days.',
    },
    {
      id: 3,
      date: 'Tuesday, 04/09',
      rating: 2,
      greatful: 'I’m happy to have my friends who support me every single day.',
      learned: 'TIL: Apple is very slow in processes its certificates. I’m now waiting for 3 days.',
    },
  ],
});

const mapDispatchToProps = dispatch => ({});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CountdownToOffline);
