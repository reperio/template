import React from 'react'
import { Navbar, Nav, NavItem, NavDropdown, DropdownButton } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import ReperioBar from '../misc/reperioBar';
import ReperioBarContainer from '../../containers/misc/reperioBarContainer';
import Applications from '../applications/applications';
import ProfileInfoContainer from '../../containers/profileInfo/profileInfoContainer';
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
                <NavItem className="r-menu-left-container">
                    <ul className="r-menu-left-container-nav-items"></ul>
                </NavItem>
            </Nav>
            <Nav pullRight>
                <NavItem>
                    <Applications />
                </NavItem>
                <ProfileInfoContainer/>
            </Nav>
        </Navbar>
        <ReperioBarContainer />
    </div>
    
);

export default NavMenu;