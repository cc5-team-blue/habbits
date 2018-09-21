// Here is the place to set action's type
export const COUNTDOWN = 'countdown';
export const CHANGE_INTERVAL = 'change interval';
export const OFFLINECOUNTDOWN = 'set offline countdown';
export const APP_STATE_CHAGE = 'app state change';
export const IS_CONNECTED_CHANGE = 'is connected change';
export const RESETOFFLINECOUNTDOWN = 'reset offline countdown';
export const SET_END_TIME = 'set end time';
export const GET_JOURNAL_DATA = 'get journal data';
export const SET_CURRENT_COUNTER = 'set current counter for timer.js';
export const SAVE_NAME_TO_STORE = 'save user name to store';
export const SAVE_UID_TO_STORE = 'save user uid to store';
export const SET_JOURNAL_COUNT = 'set journal count to redux state';

// Action creater
export const changeInterval = data => ({
  type: CHANGE_INTERVAL,
  data,
});

export const countdown = data => ({
  type: COUNTDOWN,
  data,
});

export const setOfflineCountdown = data => ({
  type: OFFLINECOUNTDOWN,
  data,
});

export const appStateChange = nextAppState => ({
  type: APP_STATE_CHAGE,
  nextAppState,
});

export const updateConnectivity = isConnected => ({
  type: IS_CONNECTED_CHANGE,
  isConnected,
});

export const resetOfflineCountdown = () => ({
  type: RESETOFFLINECOUNTDOWN,
});

export const setEndTime = endTime => ({
  type: SET_END_TIME,
  endTime,
});

export const setCurrentCounter = counter => ({
  type: SET_CURRENT_COUNTER,
  counter,
});

export const saveNameToStore = name => ({
  type: SAVE_NAME_TO_STORE,
  name,
});

export const saveUidToStore = uid => ({
  type: SAVE_UID_TO_STORE,
  uid,
});

export const setJournalCount = count => ({
  type: SET_JOURNAL_COUNT,
  count,
});
