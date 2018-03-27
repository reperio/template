/* eslint-disable import/no-named-as-default */
import React from 'react';
import PropTypes from 'prop-types';
import NavMenuContainer from "../containers/navMenuContainer";
import Routes from "./routes";
import { Switch, NavLink, Route } from 'react-router-dom';
import PrivateRouteContainer from "../containers/privateRouteContainer";
import PublicRouteContainer from "../containers/publicRouteContainer";
import {Redirect} from "react-router";
import MainDashboardContainer from "../containers/mainDashboardContainer";
import LoginFormContainer from "../containers/loginFormContainer";

class App extends React.Component {
  render() {
    const activeStyle = { color: 'red' };
    return (
      <div className="app-main">
        <div className="app-sidebar">
          <NavMenuContainer/>
        </div>
        <div className="app-content">
          <Routes/>
        </div>
      </div>
    );
  }
}


        

export default App;
