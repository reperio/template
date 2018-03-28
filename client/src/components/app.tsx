import React from 'react'
import NavMenuContainer from "../containers/navMenuContainer";
import Routes from "./routes";


const App = () => (
    <div className="app-main">
        <div className="app-sidebar">
            <NavMenuContainer/>
        </div>
        <div className="app-content">
            <Routes/>
        </div>
    </div>
);

export default App;
