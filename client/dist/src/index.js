import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import configureStore, { history } from './store/configureStore';
import App from './app';
const store = configureStore({});
ReactDOM.render(React.createElement(Provider, { store: store },
    React.createElement(ConnectedRouter, { history: history },
        React.createElement(App, null))), document.getElementById('root'));
//# sourceMappingURL=index.js.map