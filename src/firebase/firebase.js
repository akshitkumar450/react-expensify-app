import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyCEvUWgW8bgmB1PBlJ60vvsNT9S2fQnREk",
    authDomain: "expensify-app-356c8.firebaseapp.com",
    databaseURL: "https://expensify-app-356c8-default-rtdb.firebaseio.com",
    projectId: "expensify-app-356c8",
    storageBucket: "expensify-app-356c8.appspot.com",
    messagingSenderId: "928478677917",
    appId: "1:928478677917:web:4ef8180251ebe8c436bd74"
};

firebase.initializeApp(firebaseConfig);
firebase.analytics();

firebase.database().ref().set({
    name: 'mead'
})

export default firebase