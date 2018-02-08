import * as types from '../constants/actionTypes';

export function test(field: string, message: string) {
    return {
        type: types.TEST,
        field,
        message
    };
}
