//Saga Effect
import { takeLatest, call, all, put } from 'redux-saga/effects';
//Firebase
import { storeUserProfile, GoogleProvider, auth, getCurrentUser } from '../../utils'
//Action Type
import {
    EMAIL_SIGN_IN_START,
    CHECK_USER_SESSION,
    SIGN_UP_USER_START,
    RESET_PASSWORD_START,
    GOOGLE_SIGN_IN_START,
} from '../ActionType'
//Action
import { signInSuccess, userError, resetPasswordSuccess } from '../Action'

//Helper
import { handleResetPasswordAPI } from '../Helper'

//Toastify
import { toast } from 'react-toastify'
export const resolveAfter3Sec = new Promise(resolve => setTimeout(resolve, 3000));


export function* getSnapshotFromUserAuth(userAuth, additionalData = {}) {
    try {
        const userRef = yield call(storeUserProfile, { userAuth, additionalData });
        const snapshot = yield userRef.get();
        console.log(snapshot,"snapshot")
        yield put(
            signInSuccess({
                id: snapshot.id,
                ...snapshot.data()
            })
        );
    } catch (err) {
        toast.error(err);
    }
}

export function* emailSignIn({ payload: { Email, Password } }) {
    try {
        const userAuth = yield auth.signInWithEmailAndPassword(Email, Password)
        toast.promise(resolveAfter3Sec, {
            pending: 'Please Wait',
            success: `wellcome ${userAuth.user.email}  👌`,
            error: 'Somthing Went Wrong 🤯'
        })
        yield getSnapshotFromUserAuth(userAuth)
    } catch (error) {
        toast.error(error.message)
        console.log(error.message)
    }
}

export function* signUpUser({ payload: {
    displayName,
    Email,
    Password,
    confirmPAssword } }) {

    if (Password === confirmPAssword) {
        try {
            const { userAuth } = yield auth.createUserWithEmailAndPassword(Email, Password)
            const additionalData = { displayName };
            yield getSnapshotFromUserAuth(userAuth, additionalData);
            toast.promise(resolveAfter3Sec, {
                pending: 'Please Wait',
                success: `wellcome ${userAuth.user.email}`,
                error: 'Somthing Went Wrong 🤯'
            })
        } catch (error) {
            toast.error(error.message)
            console.log(error.message)
        }
    } else {
        toast.error("Password Don 't match")
        const err = ["Password Don 't match"];
        yield put(
            userError(err)
        );
        return;
    }
}

export function* resetPassword({ payload: { email } }) {
    try {
        yield call(handleResetPasswordAPI, email);
        yield put(
            resetPasswordSuccess()
        );
    } catch (err) {
        yield put(
            userError(err)
        )
    }
}

export function* onResetPasswordStart() {
    yield takeLatest(RESET_PASSWORD_START, resetPassword);
}

export function* googleSignIn() {
    try {
        const { userAuth } = yield auth.signInWithPopup(GoogleProvider);
        yield getSnapshotFromUserAuth(userAuth);
        toast.promise(resolveAfter3Sec, {
            pending: 'Please Wait',
            success: `wellcome ${userAuth.user.email}`,
            error: 'Somthing Went Wrong 🤯'
        })
    } catch (error) {
        toast.error(error.message)
        console.log(error.message)
    }
}


//////////// Not Needed ////////////


export function* onSignUpUserStart() {
    yield takeLatest(SIGN_UP_USER_START, signUpUser);
}

export function* onEmailSignInStart() {
    yield takeLatest(EMAIL_SIGN_IN_START, emailSignIn);
}

export function* onGoogleSignInStart() {
    yield takeLatest(GOOGLE_SIGN_IN_START, googleSignIn);
}

export function* isUserAuthenticated() {
    try {
        const userAuth = yield getCurrentUser();
        if (!userAuth) return;
        yield getSnapshotFromUserAuth(userAuth);

    } catch (error) {
        toast.error(error.message)
        console.log(error.message)
    }
}

export function* onCheckUserSession() {
    yield takeLatest(CHECK_USER_SESSION, isUserAuthenticated);
}

//////////// Not Needed ////////////

export function* userSagas() {
    yield all([
        call(onEmailSignInStart),
        call(onCheckUserSession),
        call(onSignUpUserStart),
        call(onResetPasswordStart),
        call(onGoogleSignInStart),
    ])
}