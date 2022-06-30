//Action Type
import {
    SET_CURRENT_USER,
    SIGN_IN_SUCCESS,
    EMAIL_SIGN_IN_START,
    CHECK_USER_SESSION,
    SIGN_UP_USER_START,
    USER_ERROR,
    RESET_PASSWORD_START,
    RESET_PASSWORD_SUCCESS,
    RESET_USER_STATE,
    GOOGLE_SIGN_IN_START,
    SAVE_USER_DATA
} from '../ActionType'

//Sign in user Action
export const emailSignInStart = (payload) => ({
    type: EMAIL_SIGN_IN_START,
    payload
});

export const signInSuccess = (payload) => ({
    type: SIGN_IN_SUCCESS,
    payload
});

export const checkUserSession = (payload) => ({
    type: CHECK_USER_SESSION,
    payload
});

//Store current user
export const SetCurrentUser = (payload) => {
    return {
        type: SET_CURRENT_USER,
        payload
    }
}

//Sign up user Action
export const signUpUserStart = (payload) => ({
    type: SIGN_UP_USER_START,
    payload
});

//Error
export const userError = (payload) => ({
    type: USER_ERROR,
    payload
});

//Reset Password
export const resetPasswordStart = (payload) => ({
    type: RESET_PASSWORD_START,
    payload
});

export const resetPasswordSuccess = () => ({
    type: RESET_PASSWORD_SUCCESS,
    payload: true
});

export const resetUserState = () => ({
    type: RESET_USER_STATE
});

///Gggole Signin
export const googleSignInStart = () => ({
    type: GOOGLE_SIGN_IN_START
});

//Rahul
export const rahul = (payload) => ({
    type: SAVE_USER_DATA,
    payload
});


