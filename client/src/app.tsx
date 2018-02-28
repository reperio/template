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
      <div className="app-main">
        <div className="app-sidebar">
            <NavLink exact to="/" activeStyle={activeStyle}>Status</NavLink><br/>
            <NavLink exact to="/testRedux" activeStyle={activeStyle}>Test Redux</NavLink><br/>
            <NavLink exact to="/testReact" activeStyle={activeStyle}>Test React</NavLink><br/>
            <NavLink exact to="/nowhere" activeStyle={activeStyle}>Test default route</NavLink><br/>
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
