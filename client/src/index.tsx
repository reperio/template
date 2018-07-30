import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'react-router-redux'
import "./styles/app.scss"
import { store } from "./store/store"
import { history } from "./store/history"
import App from './app'

async function load() {

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