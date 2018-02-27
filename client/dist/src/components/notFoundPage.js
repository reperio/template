import React from 'react';
import { Link } from 'react-router-dom';
export class NotFoundPage extends React.Component {
    render() {
        return (React.createElement("div", null,
            React.createElement("h4", null, "404 Page Not Found"),
            React.createElement(Link, { to: "/" }, "Go back to status page")));
    }
}
//# sourceMappingURL=notFoundPage.js.map