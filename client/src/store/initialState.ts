export default {
    
};
  
export class State {
    authSession: StateAuthSession;
    test: any;
    note: any;
}

export class StateAuthSession {
    isPending: boolean;
    isAuthenticated: boolean;
    isError: boolean;
    errorMessage: string;
    user: any;
}


export const initialState: State = {
    authSession: {
        isPending: false,
        isAuthenticated: false,
        isError: false,
        errorMessage: null,
        user: null
    },
    test: {
        message1: '',
        message2: '',
        message3: '',
        message4: '',
        message5: '',
        message6: '',
        message7: '',
        message8: '',
        testMessage: '',
        testAsyncMessage: '',
    }, note: {
        test: '',
        noteToAdd: '',
        noteList: ['first note', 'second note']
    }
};
