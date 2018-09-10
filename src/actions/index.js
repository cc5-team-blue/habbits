// Here is the place to set action's type
export const SOME_ACTION_HERE = 'test action';
export const ANOTHER_ACTION = 'another action';
export const COUNTDOWN = 'countdown';
export const CHANGE_INTERVAL = 'change interval';
export const OFFLINECOUNTDOWN = 'set offline countdown';

// Action creater
export const someActionHere = data => ({
  type: SOME_ACTION_HERE,
  data,
});

export const anotherAction = data => ({
  type: ANOTHER_ACTION,
  data,
});

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
