/* eslint-disable import/no-named-as-default */
import React from 'react';
import PropTypes from 'prop-types';
import { Switch, NavLink, Route } from 'react-router-dom';
import StatusPage from './components/statusPage';
import NotFoundPage from './components/notFoundPage';

class App extends React.Component {
  render() {
    const activeStyle = { color: 'red' };
    return (
      <div>
        <div>
          <NavLink exact to="/" activeStyle={activeStyle}>Status</NavLink>
          <NavLink exact to="/test" activeStyle={activeStyle}>Test</NavLink>
        </div>
        <Switch>
          <Route exact path="/" component={StatusPage} />
          <Route component={NotFoundPage} />
        </Switch>
      </div>
    );
  }
}

export default App;
