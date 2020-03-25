import { createSelector } from 'reselect';

const userReducer = (state) => state.user;

const selectUser = createSelector(
  userReducer,
  (reducer) => reducer.user,
);

export {
  selectUser,
};
