import {connect} from 'react-redux';
import React from 'react';

function mapStateToProps(state: any) : object {
    return state.services.map((s:any) => new s());
}

export function wrap(component: React.StatelessComponent) {
    return connect(mapStateToProps)(component);
}