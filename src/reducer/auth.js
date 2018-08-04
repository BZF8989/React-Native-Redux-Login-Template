import {
    AUTH_SUCCESS,
    AUTH_LOGOUT,
    AUTH_FAILED
} from '../action/index';

const initialState = {
    username: '',
    isLoggedIn: false,
    error: null
};

export default function auth(state = initialState, action) {
    switch (action.type) {
        case AUTH_SUCCESS:
            return Object.assign({}, state, {
                username: action.response.username,
                isLoggedIn: true
            });
        case AUTH_FAILED:
            return Object.assign({}, state, {
                error: action.error,
            });
        case AUTH_LOGOUT:
            return Object.assign({}, state, {
                username: '',
                isLoggedIn: false,
                error: null
            });
        default:
            return state;
    }
}