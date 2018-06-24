import { combineReducers } from "redux";
import { reducer as formReducer } from 'redux-form'
import { authSessionReducer } from "./authSessionReducer"
import { accountCreateReducer } from "./account/accountCreateReducer";
import { accountEditReducer } from "./account/accountEditReducer";
import { accountReducer } from "./account/accountReducer";

export const rootReducer = combineReducers({
    form: formReducer,
    authSession: authSessionReducer,
    accountCreate: accountCreateReducer,
    accountEdit: accountEditReducer,
    account: accountReducer
});