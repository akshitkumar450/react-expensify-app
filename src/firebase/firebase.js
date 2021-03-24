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
// in ref() is no arg is passed ,it means root of the database
firebase.database().ref().set({
    name: 'mead',
    age: 23,
    isSingle: true,
    location: {
        city: 'philedalphia'
    }
})
// this will only update age 
firebase.database().ref('age').set(53)
// this will change city in location
firebase.database().ref('location/city').set('new york')
// this will add new field attributes and set the values
firebase.database().ref('attributes').set({
    height: 6,
    weight: 40
})
export default firebase