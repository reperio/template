import React from 'react'
import {Navbar, LinkContainer, NavItem, ApplicationMenuItem} from '@reperio/ui-components'

const NavMenu = (props: any) => (
    <Navbar
        authenticated={true}
        profile={{initials: 'BA',
            name:'Brian Adams',
            accountName: 'Reper.io',
            phone: '1234567890',
            email:'brian@reper.io'}}
        linkContainers={[
            <LinkContainer key="1" exact to="/scratch">
                <NavItem>Test</NavItem>
            </LinkContainer>,
            <LinkContainer key="2" exact to="/login">
                <NavItem>Test2</NavItem>
            </LinkContainer>
        ]}
        applicationMenuItems={[
            <ApplicationMenuItem key="1" name="Example1" label="Example" />,
            <ApplicationMenuItem key="2" name="Exmaple2" label="Example 2" />,
            <ApplicationMenuItem key="3" name="Nic Cage" image="https://images-na.ssl-images-amazon.com/images/I/61Wo915nuTL._SX425_.jpg" />,
            <ApplicationMenuItem key="4" name="Nic Cage" image="https://images-na.ssl-images-amazon.com/images/I/61Wo915nuTL._SX425_.jpg" />,
            <ApplicationMenuItem key="5" name="Nic Cage" image="https://images-na.ssl-images-amazon.com/images/I/61Wo915nuTL._SX425_.jpg" />
        ]}
        authenticated={true}
        >
    </Navbar>
);

export default NavMenu;