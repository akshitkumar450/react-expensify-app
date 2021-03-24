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
}).then(() => {
    console.log('data is saved');
}).catch((error) => {
    console.log('error in saving data ', error);
})

// firebase.database().ref('isSingle').remove()
//     .then(() => {
//         console.log('data removed');
//     }).catch((error) => {
//         console.log('error in removing data', error);
//     })

// update can be used to 
// --update data by passing updated data object
// -- add a new data 
// -- delete existing data by setting its value to be null
// udpate method can't be used to update the nested object values(directly)
firebase.database().ref().update({
    name: 'scolfield',
    age: 49,
    job: 'SDE',
    isSingle: null,
    // for updating the nested object data
    'location/city': 'boston'

})
export default firebase