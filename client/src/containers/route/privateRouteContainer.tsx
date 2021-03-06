import React from 'react';
import {connect} from "react-redux";
import PrivateRoute from "../../components/route/routeHelperComponents/privateRoute";

class PrivateRouteContainer extends React.Component {
    props: any;

    render() {
        return (
            <PrivateRoute {...this.props} />
        );
    }
}

function mapStateToProps(state: any) {
    return {
        authSession: state.authSession
    };
}

export default connect(mapStateToProps)(PrivateRouteContainer) as any;