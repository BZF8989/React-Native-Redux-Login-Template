import {loginSuccess} from '../action/auth';

export function login(userData, cb){
    return dispatch => dispatch(loginSuccess(userData, cb));
}