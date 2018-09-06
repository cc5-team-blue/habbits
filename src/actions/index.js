// Here is the place to set action's type
export const SOME_ACTION_HERE = 'test action';
export const ANOTHER_ACTION = 'another action';
export const SET_USER = 'SET_USER';

// Action creater
export const someActionHere = data => ({
  type: SOME_ACTION_HERE,
  data,
});

export const anotherAction = data => ({
  type: ANOTHER_ACTION,
  data,
});

export const setUser = user => ({
  type: ANOTHER_ACTION,
  user,
  loading: false,
});
