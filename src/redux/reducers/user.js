import { handleActions } from 'redux-actions';

import { userActions } from '../actions';

const initialState = {
  user: false,
};

const userReducer = handleActions(
  {
    [userActions.login.success]: (state) => ({
      ...state,
      user: true,
    }),
  },
  initialState,
);

export default userReducer;
