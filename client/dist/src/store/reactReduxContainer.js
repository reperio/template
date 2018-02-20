import { connect } from 'react-redux';
function mapStateToProps(state) {
    return state.services.map((s) => new s());
}
export function wrap(component) {
    return connect(mapStateToProps)(component);
}
//# sourceMappingURL=reactReduxContainer.js.map