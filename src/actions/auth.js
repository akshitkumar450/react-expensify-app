import firebase, { googleAuthProvider } from '../firebase/firebase'


export const login = (uid) => ({
    type: "LOGIN",
    uid
})

export const logout = () => ({
    type: "LOGOUT"
})

// login
export const startLogin = () => {
    return () => {
        return firebase.auth().signInWithPopup(googleAuthProvider)
    }
}

// logout
export const startLogout = () => {
    return () => {
        return firebase.auth().signOut()
    }
}