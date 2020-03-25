// LIBS
import React from 'react';
import { useSelector } from 'react-redux';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';

// STYLED
import './App.css';

// ROUTER
import { routes } from './router';

// COMPONENTS
import Root from './components/Root';
import Home from './components/Home';

// REDUX
import { userSelectors } from './redux/selectors';

function App() {
  const isLogged = useSelector(userSelectors.selectUser);

  const loggedInRoutes = (
    <>
      <Route path={routes.home} component={Home} />
      <Route path="*" render={() => <Redirect to={routes.home} />} />
    </>
  );

  const loggedOutRoutes = (
    <>
      <Route exact path={routes.root} component={Root} />
      <Route path="*" render={() => <Redirect to={routes.root} />} />
    </>
  );

  return (
    <Router>
      <Switch>
        { isLogged ? loggedInRoutes : loggedOutRoutes }
      </Switch>
    </Router>
  );
}

export default App;
