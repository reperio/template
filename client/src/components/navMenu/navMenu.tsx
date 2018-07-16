import React from 'react'
import { Navbar, Nav, NavItem } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import ReperioBar from '../misc/reperioBar';
import ReperioBarContainer from '../../containers/misc/reperioBarContainer';
import Applications from '../applications/applications';
const reperio = require('../../assets/reperio-rAsset-31.png');

const NavMenu = (props: any) => (
    <div className="nav-menu-container">
        <Navbar>
            <Navbar.Header>
                <Navbar.Brand>
                    <img className="r-menu-header-icon" src={reperio}/>
                </Navbar.Brand>
            </Navbar.Header>
            <Nav>
                <li className="r-menu-left-container">
                    <ul className="r-menu-left-container-nav-items"></ul>
                </li>
                <li className="r-menu-right-container">
                    <Applications/>
                </li>
            </Nav>
        </Navbar>
        <ReperioBarContainer />
    </div>
    
);

export default NavMenu;