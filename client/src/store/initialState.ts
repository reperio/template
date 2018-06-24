import VirtualMachineModel from "../models/virtualMachineModel";
import NetworkModel from "../models/networkModel";
import UserModel from "../models/userModel";
import PackageModel from "../models/packageModel";
import ReactTableOptionsModel from "../models/reactTableOptionsModel";

export class State {
    authSession: StateAuthSession;
    accountCreate: StateAccountCreate;
    accountEdit: StateAccountEdit;
    account: StateAccount;
}

export class StateAuthSession {
    isAuthenticated: boolean;
    user: UserModel;
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
    user: UserModel;
}

export const initialState: State = {
    authSession: {
        isAuthenticated: true,
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