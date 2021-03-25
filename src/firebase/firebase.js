import firebase from 'firebase'

const firebaseConfig = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.FIREBASE_APP_ID
};

firebase.initializeApp(firebaseConfig);

// // child_removed-> this will run when data is removed 
// firebase.database().ref('expenses').on('child_removed', (snapshot) => {
//     console.log(snapshot.key, snapshot.val());
// })

// // child_changes -> runs when data changes
// firebase.database().ref('expenses').on('child_changed', (snapshot) => {
//     console.log(snapshot.key, snapshot.val());
// })

// // child_added -> will run for both for the  existing data and for new data added
// firebase.database().ref('expenses').on('child_added', (snapshot) => {
//     console.log(snapshot.key, snapshot.val());
// })

// firebase does not support database in which we want to use it
// push method generates a unique id 

// firebase.database().ref('expenses').push({
//     des: 'one des',
//     note: 'one note',
//     amaount: 1,
//     createdAt: 1
// })
// firebase.database().ref('expenses').push({
//     des: 'two des',
//     note: 'two note',
//     amaount: 2,
//     createdAt: 2
// })
// firebase.database().ref('expenses').push({
//     des: 'three des',
//     note: 'three note',
//     amaount: 3,
//     createdAt: 3
// })

// fetching data from the array

// firebase.database().ref('expenses')
//     .once('value')
//     .then((snapshot) => {
//         const expenses = []
//         snapshot.forEach((childSnapshot) => {
//             expenses.push({
//    // key gives the id
//                 id: childSnapshot.key,
//                 ...childSnapshot.val()
//             })
//         })
//         console.log(expenses);
//     })

// on method does not support promises
// firebase.database().ref('expenses')
//     .on('value', (snapshot) => {
//         const expenses = []
//         snapshot.forEach((childSnapshot) => {
//             expenses.push({
//                 id: childSnapshot.key,
//                 ...childSnapshot.val()
//             })
//         })
//         console.log(expenses);
//     })

// setTimeout(() => {
//     firebase.database().ref('expenses/-MW_PgMx2W_ls4diQ_3m').update({
//         amount: 10,
//         des: 'updated one'
//     })
// }, 2000)

// setTimeout(() => {
//     firebase.database().ref('expenses/-MW_PgMx2W_ls4diQ_3m').update({
//         amount: 10,
//         des: 'updated twice one'
//     })
// }, 5000)

// firebase.database().ref('notes').push({
//     title: 'course topics',
//     body: 'react, angluar'
// })

// firebase.database().ref('notes/-MW_N9i6ybsznMolIjaI').remove()
// in ref() is no arg is passed ,it means root of the database
// firebase.database().ref().set({
//     name: 'mead',
//     age: 23,
//     isSingle: true,
//     location: {
//         city: 'philedalphia'
//     }
// }).then(() => {
//     console.log('data is saved');
// }).catch((error) => {
//     console.log('error in saving data ', error);
// })

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
// firebase.database().ref().update({
//     name: 'scolfield',
//     age: 49,
//     job: 'SDE',
//     isSingle: null,
//     // for updating the nested object data
//     'location/city': 'boston'

// })

// once method runs single time

// firebase.database().ref()
//     .once('value')
//     .then((snapshot) => {
//         const val = snapshot.val()
//  //  returns a object of data
//         console.log(val);
//     }).catch((error) => {
//         console.log('error', error);
//     })

// on method  will runs every single time if data changes (like subscribe)
// on method returns the function to unsubscribe
// (2nd arg) for success 
// third arg for error.

// const onValueChange = firebase.database().ref()
//     .on('value', (snapshot) => {
//         console.log(snapshot.val());
//     }, (error) => {
//         console.log('error with data fetching', error);
//     })

// setTimeout(() => {
//     firebase.database().ref('age').set(50)
// }, 3500)

// setTimeout(() => {
//     // off is used to unsubscribe with the same function 'on' which calls
//     firebase.database().ref().off(onValueChange)
// }, 7000)

// setTimeout(() => {
//     firebase.database().ref('age').set(51)
// }, 10500)

// firebase.database().ref()
//     .on('value', (snapshot) => {
//         const val = snapshot.val();
//         console.log(val);
//         console.log(`${val.name} is a ${val.job} in city ${val.location.city}`);
//     })

// setTimeout(() => {
//     firebase.database().ref('name').set('sara')
// }, 2000)


export default firebase