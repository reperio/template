import React from 'react'
import { Navbar, Nav, NavItem } from "react-bootstrap";
import { LinkContainer } from 'react-router-bootstrap'
import ReperioBarContainer from '../../containers/misc/reperioBarContainer';
import ApplicationsContainer from '../../containers/applications/applicationsContainer';
import ProfileInfoContainer from '../../containers/profileInfo/profileInfoContainer';
const reperio = require('../../assets/reperio-rAsset-31.png');

const NavMenu = (props: any) => (
    <div className="nav-menu-container">
        <Navbar collapseOnSelect>
            <Navbar.Header>
                <Navbar.Brand>
                    <img className="r-menu-header-icon" src={reperio}/>
                </Navbar.Brand>
            </Navbar.Header>
            <Nav>
                <LinkContainer exact to="/scratch">
                    <NavItem>Test</NavItem>
                </LinkContainer>
                <LinkContainer exact to="/login">
                    <NavItem>Test2</NavItem>
                </LinkContainer>
            </Nav>
            <Nav pullRight>
                <ApplicationsContainer/>
                <ProfileInfoContainer/>
            </Nav>
        </Navbar>
        <ReperioBarContainer />
    </div>
);

export default NavMenu;