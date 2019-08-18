import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

/**
 * Import Components
 */
import HomePage from './pages/Home';
import LoginPage from './pages/Login';

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route path="/login" component={LoginPage} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
