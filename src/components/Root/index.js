import React from 'react';
import { useDispatch } from 'react-redux';
import { userActions } from '../../redux/actions';

const Root = () => {
  const dispatch = useDispatch();

  const login = () => dispatch(userActions.login.call());

  return (
    <div>
      <div>Root Component</div>
      <button onClick={login}>LOGIN</button>
    </div>
  );
};

export default Root;
