import firebase, { googleAuthProvider } from '../firebase/firebase'

// login
export const startLogin = () => {
    return () => {
        firebase.auth().signInWithPopup(googleAuthProvider)
    }
}

// logout
export const startLogout = () => {
    return () => {
        firebase.auth().signOut()
    }
}