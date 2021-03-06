import { createSwitchNavigator } from 'react-navigation';
import { Easing, Animated } from 'react-native';
import Main from '../components/Main';
import Analytics from '../components/Analytics';
import SuccessRabbit from '../components/SleepHabbit/SuccessRabbit';
import CountdownToOffline from '../components/SleepHabbit/CountdownToOffline';
import Failure from '../components/SleepHabbit/Failure';
import TimerScreen from '../components/SleepHabbit/TimerScreen';
import journalDescription from '../components/JournalHabbit/journalDescription';
import journalFailure from '../components/JournalHabbit/journalFailure';
import journalMainScreen from '../components/JournalHabbit/journalMainScreen';
import journalSuccess from '../components/JournalHabbit/journalSuccess';
import journalSuccessBIG from '../components/JournalHabbit/JournalSuccessBIG';
import JournalEntries from '../components/JournalEntries/JournalEntries';
import MainNavigator from './MainNavigator';
import EarlyMorningNavigator from '../components/EarlyMorning/nav/Navigator';
import EarlyLoading from '../components/EarlyMorning/screens/Loading';
import FailureMinus from '../components/SleepHabbit/FailureMinus';
import Login from '../auth/Login';

// Here is the place we define app's pages with name
// For example, Main page have reference to SampleComponent.
const switchNav = createSwitchNavigator(
  {
    Main: { screen: Main },
    Success: { screen: SuccessRabbit },
    OffLine: { screen: CountdownToOffline },
    OffLineRabbit: { screen: Failure },
    TimerScreen: { screen: TimerScreen },
    Analytics: { screen: Analytics },
    JournalDescription: { screen: journalDescription },
    JournalFailure: { screen: journalFailure },
    JournalMainScreen: { screen: journalMainScreen },
    JournalSuccess: { screen: journalSuccess },
    JournalSuccessBIG: { screen: journalSuccessBIG },
    JournalEntries: { screen: JournalEntries },
    Authentication: { screen: MainNavigator },
    EarlyMorning: { screen: EarlyMorningNavigator },
    EarlyLoading: { screen: EarlyLoading },
    FailureMinus: { screen: FailureMinus },
    Login: { screen: Login },
  },
  {
    headerMode: 'none',
    mode: 'modal',
    initialRouteName: 'Authentication',
    navigationOptions: {
      gesturesEnabled: false,
    },
    transitionConfig: () => ({
      transitionSpec: {
        duration: 510,
        easing: Easing.out(Easing.poly(4)),
        timing: Animated.timing,
      },
    }),
  }
);

export default switchNav;
