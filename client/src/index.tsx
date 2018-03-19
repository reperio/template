import React, { Component } from 'react'
import PropTypes from 'prop-types'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import { Provider, connect } from 'react-redux'
import { ConnectedRouter } from 'react-router-redux'
import configureStore, { history } from './store/configureStore'
import initialState from './reducers/initialState'
import App from './app'
import './styles/app.scss'
import manifest from '!!file?publicPath=/&name=manifest.json!./manifest.json';

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <App/>
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root')
)