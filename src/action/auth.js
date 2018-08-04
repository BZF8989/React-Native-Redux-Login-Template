import {
    AUTH_FAILED,
    AUTH_LOGOUT,
    AUTH_SUCCESS
} from './index';


export function loginError(error) {
    return { error, type: AUTH_FAILED };
}

export function loginSuccess(response) {
    return dispatch => {
        dispatch({ response, type: AUTH_SUCCESS});
    };
}


export function logoutRequest(cb) {
    cb();
    return dispatch => {
        dispatch({type: AUTH_LOGOUT});
    };
}