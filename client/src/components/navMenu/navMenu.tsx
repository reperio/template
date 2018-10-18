import React from 'react'
import {Navbar, LinkContainer, NavItem, ApplicationMenuItem} from '@reperio/ui-components'

const NavMenu = (props: any) => (
    <Navbar
        authenticated={true}
        applicationName="Template Application"
        linkContainers={[
            <LinkContainer key="1" exact to="/scratch">
                <NavItem>Test</NavItem>
            </LinkContainer>,
            <LinkContainer key="2" exact to="/login">
                <NavItem>Test2</NavItem>
            </LinkContainer>
        ]}
        >
    </Navbar>
);

export default NavMenu;