import React from 'react'
import { Navbar, Nav, NavItem } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import ReperioBar from '../misc/reperioBar';
import ReperioBarContainer from '../../containers/misc/reperioBarContainer';
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
            </Nav>
        </Navbar>
        <ReperioBarContainer />
    </div>
    
);

export default NavMenu;