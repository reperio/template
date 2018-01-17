import {TEST} from '../constants/actionTypes';
import initialState from './initialState';

// IMPORTANT: Note that with Redux, state should NEVER be changed.
// State is considered immutable. Instead,
// create a copy of the state passed and set new values on the copy.
// Note that I'm using Object.assign to create a copy of current state
// and update values on the copy.
export default function testReducer(state = initialState.test, action: any) {
  let newState;

  switch (action.type) {
    case TEST:
      return Object.assign({}, state, {counter: state.counter + 1});

    default:
      return state;
  }
}

