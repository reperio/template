import { combineReducers } from 'redux';
import test from './testReducer';
import notes from './noteReducer';
import { reducer as formReducer } from 'redux-form'
import { authSessionReducer } from "./authSessionReducer"
import { routerReducer } from 'react-router-redux';

/*
    note - the name of the reducer here (test, or note) is what will be seen on the state. 
    What is on the initial state object is mapped in each individual reducer
*/
export const rootReducer = combineReducers({
    test,
    notes,
    authSession: authSessionReducer,
    form: formReducer,
    routing: routerReducer
});
