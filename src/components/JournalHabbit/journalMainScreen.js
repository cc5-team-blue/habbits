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
    };
  }

  render() {
    const { goToJournalSuccess } = this.props;
    const { greatful, til } = this.state;

    return (
      <View>
        <StatusBar barStyle="light-content" />
        <View>
          <View>
            <Text>Hi Hiro, how was your day?</Text>
          </View>
          <View>
            <Text>Rate your day:</Text>
            <Rating
              onChange={rating => console.log(rating)}
              selectedStar={fullStar}
              unselectedStar={emptyStar}
              config={{
                easing: Easing.inOut(Easing.ease),
                duration: 100,
              }}
              stagger={80}
              maxScale={1.2}
              starStyle={{
                width: 30,
                height: 30,
              }}
            />
          </View>
          <View>
            <Text>One thing you&#039;re grateful for:</Text>
            <TextInput
              placeholder="Grateful for..."
              autoCapitalize="none"
              style={styles.textInput}
              onChangeText={text => this.setState({ greatful: text })}
              value={greatful}
              returnKeyType="next"
            />
          </View>
          <View>
            <Text>Something you&#039;ve learned today:</Text>
            <TextInput
              placeholder="Today I learned..."
              autoCapitalize="none"
              style={styles.textInput}
              onChangeText={text => this.setState({ til: text })}
              value={til}
              returnKeyType="next"
            />
          </View>
        </View>
        <View onTouchStart={() => goToJournalSuccess(this.state)}>
          <Text>Submit!</Text>
        </View>
      </View>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  goToJournalSuccess: state => {
    firebaseInsert(state);
    dispatch(NavigationActions.navigate({ routeName: 'JournalSuccess' }));
  },
});

export default connect(
  null,
  mapDispatchToProps
)(journalDescription);
