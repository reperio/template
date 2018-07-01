import ReactTableOptionsModel from "../models/reactTableOptionsModel";

export class State {
    authSession: StateAuthSession;
    accountCreate: StateAccountCreate;
    accountEdit: StateAccountEdit;
    account: StateAccount;
}

export class StateAuthSession {
    isAuthenticated: boolean;
    user: null;
    isLoading: boolean;
}

export class StateAccountCreate {
    isLoading: boolean;
}

export class StateAccountEdit {
    isLoading: boolean;
}

export class StateAccount {
    isLoading: boolean;
    user: null;
}

export const initialState: State = {
    authSession: {
        isAuthenticated: false,
        user: null,
        isLoading: false
    },
    accountCreate: {
        isLoading: false
    },
    accountEdit: {
        isLoading: false
    },
    account: {
        isLoading: false,
        user: null
    }
};