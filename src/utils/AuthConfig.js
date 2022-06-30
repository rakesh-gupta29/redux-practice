import { toast } from 'react-toastify';
import { auth, firestore, firebase } from './firebase'

export const GoogleProvider = new firebase.auth.GoogleAuthProvider()
GoogleProvider.setCustomParameters({ prompt: 'select_account' });

export const storeUserProfile = async ( userAuth, additionalData) => {
    if (!userAuth) return;
    const { uid } = userAuth;

    const userRef = firestore.doc(`users/${uid}`);
    const snapshot = await userRef.get();

    if (!snapshot.exists) {
        const { displayName, email } = userAuth;
        const timestamp = new Date();
        const userRoles = ['user'];

        try {
            await userRef.set({
                displayName,
                email,
                createdDate: timestamp,
                userRoles,
                ...additionalData,
            });
        } catch (err) {
            toast.error(err);
        }
    }
    return userRef;
}


export const getCurrentUser = () => {
    return new Promise((resolve, reject) => {
        const unsubscribe = auth.onAuthStateChanged(userAuth => {
            unsubscribe();
            resolve(userAuth);
        }, reject);
    })
}