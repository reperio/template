import React from 'react'
import {MenuItem, Nav, Navbar, NavDropdown, NavItem} from "react-bootstrap";
import LinkContainer from "react-router-bootstrap/lib/LinkContainer";

import NavMenuLoginLink from "./navMenuLoginLink";
import NavMenuLogOutLinkContainer from "../../containers/navMenuLogOutLinkContainer";

const NavMenu = (props: any) => (
    <div className="app-sidebar">
        <div className="nav-side-menu">
            <div className="brand">Brand Logo</div>
            <i className="fa fa-bars fa-2x toggle-btn" data-toggle="collapse" data-target="#menu-content"></i>
        
                <div className="menu-list">
        
                    <ul id="menu-content" className="menu-content collapse out">
                        <li>
                            <a href="#">
                                <i className="fa fa-dashboard fa-lg"></i> Dashboard
                            </a>
                        </li>

                        <li>
                            <a href="#">
                                <i className="fa fa-dashboard fa-lg"></i> Dashboard
                            </a>
                        </li>

                        <li>
                            <a href="#">
                                <i className="fa fa-dashboard fa-lg"></i> Dashboard
                            </a>
                        </li>

                        <li>
                            <a href="#">
                                <i className="fa fa-dashboard fa-lg"></i> Dashboard
                            </a>
                        </li>
                        
                    </ul>
            </div>
        </div>
    </div>
    // <div>
    //     {props.authSession.isAuthenticated ? <LinkContainer to="/home"><NavItem>Home</NavItem></LinkContainer> : null}
    //     {props.authSession.isAuthenticated ? <NavMenuLogOutLinkContainer/> : <NavMenuLoginLink/>}
    // </div>
);

export default NavMenu;