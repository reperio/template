import React from 'react'
import {connect} from "react-redux";
import Routes from "../components/route/routes";
import {TitleBar, ApplicationMenuItem } from '@reperio/ui-components'

class AppContainer extends React.Component {
    props: any;

    render() {
        return (
            <div className="page-container">
                <TitleBar
                    profile={{
                        initials: 'BA',
                        name: 'Brian Adams',
                        accountName: 'Reper.io',
                        phone: '1234567890',
                        email: 'brian@reper.io'
                    }}
                    applicationMenuItems={[
                        <ApplicationMenuItem key="1" name="Example1" label="Example" />,
                        <ApplicationMenuItem key="2" name="Exmaple2" label="Example 2" />,
                        <ApplicationMenuItem key="3" name="Nic Cage" image="https://images-na.ssl-images-amazon.com/images/I/61Wo915nuTL._SX425_.jpg" />,
                        <ApplicationMenuItem key="4" name="Nic Cage" image="https://images-na.ssl-images-amazon.com/images/I/61Wo915nuTL._SX425_.jpg" />,
                        <ApplicationMenuItem key="5" name="Nic Cage" image="https://images-na.ssl-images-amazon.com/images/I/61Wo915nuTL._SX425_.jpg" />
                    ]} />
                <Routes/>
            </div>
        );
    }
}

function mapStateToProps(state: any) {
    return { };
}

export default connect(mapStateToProps, null, null, {pure: false})(AppContainer);