import React, { Component } from 'react'
import PropTypes from 'prop-types'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import { Provider, connect } from 'react-redux'
import { ConnectedRouter } from 'react-router-redux'
import initialState from './reducers/initialState'
import App from './app'
import './styles/app.scss'
import { store } from "./store/store"
import { history } from "./store/history"

async function load() {
  try {
      const authToken = window.localStorage.getItem("authToken");
      if (authToken != null) {
          await authActions.setAuthToken(authToken, true)(store.dispatch);
      }
  } catch (e) {
      if (e.response == null || (e.response.status !== 401 && e.response.status !== 403)) {
          console.error("An error occurred while trying to get the logged in user from the saved auth token", e);
      }
  }

  ReactDOM.render(
      <Provider store={store}>
          <ConnectedRouter history={history}>
              <App/>
          </ConnectedRouter>
      </Provider>,
      document.getElementById('root')
  );
}

load();