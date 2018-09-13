// Here is the place to set action's type
export const COUNTDOWN = 'countdown';
export const CHANGE_INTERVAL = 'change interval';
export const OFFLINECOUNTDOWN = 'set offline countdown';
export const APP_STATE_CHAGE = 'app state change';
export const IS_CONNECTED_CHANGE = 'is connected change';
export const RESETOFFLINECOUNTDOWN = 'reset offline countdown';
export const SET_END_TIME = 'set end time';

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
