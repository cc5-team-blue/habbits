import React, { Component } from 'react';
import { Text, View, StatusBar, TextInput, Easing } from 'react-native';
import { connect } from 'react-redux';
import { NavigationActions } from 'react-navigation';
import Rating from 'react-native-rating';

import styles from '../../css/styleForJournal';
import { firebaseInsert } from '../../helper';
import emptyStar from '../../images/emptyStar.png';
import fullStar from '../../images/fullStar.png';

export class journalDescription extends Component {
  constructor(props) {
    super(props);
    this.state = {
      greatful: '',
      til: '',
      starRate: '',
    };
  }

  render() {
    const { goToJournalSuccess } = this.props;
    const { greatful, til } = this.state;

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
            <Text style={styles.journalMainHeadline}>Hi Nour, how was your day?</Text>
            <View>
              <Text style={styles.journalMainText}>
                One thing you&#039;re <Text style={styles.bold}>grateful</Text> for:
              </Text>
              <View style={styles.itemPosition}>
                <TextInput
                  placeholder="Grateful for..."
                  autoCapitalize="none"
                  style={styles.journalInput}
                  onChangeText={text => this.setState({ greatful: text })}
                  value={greatful}
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
          <View onTouchStart={() => goToJournalSuccess(this.state)} style={styles.bottomImgButton}>
            <Text style={styles.bottomButtonText}>Submit!</Text>
          </View>
        </View>
      </View>
    );
  }
}

const mapStateToProps = state => ({
  currentCounter: state.red.counter,
});

const mapDispatchToProps = dispatch => ({
  goToJournalSuccess: state => {
    firebaseInsert(state);
    dispatch(NavigationActions.navigate({ routeName: 'JournalSuccess' }));
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(journalDescription);
