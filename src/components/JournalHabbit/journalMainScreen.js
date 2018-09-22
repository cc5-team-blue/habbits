import React, { Component } from 'react';
import { Text, View, StatusBar, TextInput, Easing } from 'react-native';
import { connect } from 'react-redux';
import { NavigationActions } from 'react-navigation';
import Rating from 'react-native-rating';

import styles from '../../css/styleForJournal';
import { firebaseInsert } from '../../helper';
import emptyStar from '../../images/emptyStar.png';
import fullStar from '../../images/fullStar.png';
import { app } from '../../../db';
import { setJournalCount } from '../../actions';

export class JournalMain extends Component {
  constructor(props) {
    super(props);
    this.state = {
      grateful: '',
      til: '',
      starRate: '',
      currentJournalCount: 0,
    };
  }

  async componentDidMount() {
    const { uid } = this.props;
    const path = `users/${uid}/habits/JournalHabbit/info/counter`;
    const count = await app.database().ref(path);
    count.on('value', data => {
      this.setState({ currentJournalCount: data.val() });
    });
  }

  render() {
    const { goToJournalSuccess, uid, name } = this.props;
    const { grateful, til } = this.state;

    return (
      <View style={styles.outerContainer}>
        <StatusBar barStyle="light-content" />
        <View style={styles.innerContainer}>
          <View
            style={[
              styles.contentsContainer,
              styles.journalInputBackground,
              styles.mainItemPosition,
            ]}
          >
            <Text style={styles.journalMainHeadline}>Hi {name}, how was your day?</Text>
            <View>
              <Text style={styles.journalMainText}>
                One thing you&#039;re <Text style={styles.bold}>grateful</Text> for:
              </Text>
              <View style={styles.itemPosition}>
                <TextInput
                  placeholder="Grateful for..."
                  autoCapitalize="none"
                  style={styles.journalInput}
                  onChangeText={text => this.setState({ grateful: text })}
                  value={grateful}
                  returnKeyType="next"
                />
              </View>
            </View>
            <View>
              <Text style={styles.journalMainText}>
                Something you&#039;ve <Text style={styles.bold}>learned</Text> today:
              </Text>
              <View style={styles.itemPosition}>
                <TextInput
                  placeholder="Today I learned..."
                  autoCapitalize="none"
                  style={styles.journalInput}
                  onChangeText={text => this.setState({ til: text })}
                  value={til}
                  returnKeyType="next"
                />
              </View>
            </View>
            <View>
              <Text style={styles.journalMainText}>Rate your day:</Text>
            </View>
            <View style={styles.itemPosition}>
              <Rating
                onChange={rating => this.setState({ starRate: rating })}
                selectedStar={fullStar}
                unselectedStar={emptyStar}
                config={{
                  easing: Easing.inOut(Easing.ease),
                  duration: 100,
                }}
                stagger={80}
                maxScale={1.2}
                starStyle={{
                  width: 34,
                  height: 34,
                }}
              />
            </View>
          </View>
          <View
            onTouchStart={() => goToJournalSuccess(this.state, uid)}
            style={styles.bottomImgButton}
          >
            <Text style={styles.bottomButtonText}>Submit!</Text>
          </View>
        </View>
      </View>
    );
  }
}

const mapStateToProps = state => ({
  uid: state.red.uid,
  name: state.red.name,
});

const mapDispatchToProps = dispatch => ({
  goToJournalSuccess: (state, uid) => {
    // save data to firebase
    firebaseInsert(state, uid);
    // write counter in redux state state.dayCounter
    if (state.currentJournalCount === 29) {
      dispatch(NavigationActions.navigate({ routeName: 'JournalSuccessBIG' }));
    } else {
      dispatch(setJournalCount(state.currentJournalCount + 1));
      dispatch(NavigationActions.navigate({ routeName: 'JournalSuccess' }));
    }
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(JournalMain);
