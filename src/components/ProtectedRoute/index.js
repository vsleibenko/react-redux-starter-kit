import React from 'react';
import { useSelector } from 'react-redux';
import { Redirect, Route } from 'react-router-dom';
import { userSelectors } from '../../redux/selectors';
import { routes } from '../../router';

const ProtectedRoute = ({ component: Component, path }) => {
  const user = useSelector(userSelectors.selectUser);

  return (
    <Route
      path={path}
      render={() => (
        user
          ? <Component />
          : <Redirect to={routes.root} />
      )}
    />
  );
};

export default ProtectedRoute;
