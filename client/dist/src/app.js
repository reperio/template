/* eslint-disable import/no-named-as-default */
import React from 'react';
import { Switch, NavLink, Route } from 'react-router-dom';
import { StatusPage, NotFoundPage, TestPage } from './components';
class App extends React.Component {
    render() {
        const activeStyle = { color: 'red' };
        return (React.createElement("div", null,
            React.createElement("div", null,
                React.createElement(NavLink, { exact: true, to: "/", activeStyle: activeStyle }, "Status"),
                React.createElement(NavLink, { exact: true, to: "/test", activeStyle: activeStyle }, "Test")),
            React.createElement(Switch, null,
                React.createElement(Route, { exact: true, path: "/", component: StatusPage }),
                React.createElement(Route, { path: "/test", component: TestPage }),
                React.createElement(Route, { component: NotFoundPage }))));
    }
}
export default App;
//# sourceMappingURL=app.js.map