/* eslint-disable import/no-named-as-default */
import React from 'react';
import PropTypes from 'prop-types';
import { Switch, NavLink, Route } from 'react-router-dom';
import StatusPage from './components/statusPage';
import TestPage from './components/testPage';
import {TestPageReact} from './components/testPageReact';
import NotFoundPage from './components/notFoundPage';

class App extends React.Component {
  render() {
    const activeStyle = { color: 'red' };
    return (
      <div>
        <div className="app-nav">
          <NavLink exact to="/" activeStyle={activeStyle}>Status</NavLink> | 
          <NavLink exact to="/testRedux" activeStyle={activeStyle}>Test Redux</NavLink> | 
          <NavLink exact to="/testReact" activeStyle={activeStyle}>Test React</NavLink> | 
          <NavLink exact to="/nowhere" activeStyle={activeStyle}>Test default route</NavLink>
        </div>
        <div className="app-content">
          <Switch>
            <Route exact path="/" component={StatusPage} />
            <Route exact path="/testRedux" component={TestPage} />
            <Route exact path="/testReact" component={TestPageReact} />
            <Route component={NotFoundPage} />
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
