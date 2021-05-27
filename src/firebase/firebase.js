//import * as firebase from 'firebase';
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

//import * as firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyDWgDiUqCC2X9pk2GvWBeru0ilBEWF_GYU',
  authDomain: 'expensify-5ad03.firebaseapp.com',
  databaseURL: 'https://expensify-5ad03-default-rtdb.firebaseio.com',
  projectId: 'expensify-5ad03',
  storageBucket: 'expensify-5ad03.appspot.com',
  messagingSenderId: '134730365360',
  appId: '1:134730365360:web:e0552581cedd9907053e75',
  measurementId: 'G-8B6SRFJD3D',
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const database = firebase.database();

export {firebase, database as default}

// database.ref('expenses').push({
//   description: 'coffee', note: '', amount: 7, createAt: ''
// })
// database.ref('expenses').push({
//   description: 'dinner', note: '', amount: 45, createAt: ''
// })
// database.ref('expenses').push({
//   description: 'gift', note: '', amount: 67, createAt: ''
// })
// database.ref('notes').push({
//   title: 'first note!',
//   body: 'this is the note'
// })

// database.ref('expenses').once('value')
// .then((snapshot) => {
//   console.log(snapshot.val())
//   const expenses = []
//   snapshot.forEach((data) => {
//     expenses.push({
//       id: data.key,
//       ...data.val()
//     })
//   })
//   console.log(expenses)
// });

// database.ref('expenses').on('value', (data) => {
//   const expenses = []
//   data.forEach((data) => {
//     expenses.push({
//       id: data.key,
//       ...data.val()
//     })
//   })
//   console.log(expenses)
// })



// const firebaseNotes = {
//   notes: {
//     dfsdff: {
//       title: 'first note',
//       body: 'this is my note',
//     },
//     dsfsdf: {
//       title: 'another note',
//       body: 'this is her note',
//     },
//   },
// };

// const notes = [
//   {
//     id: '12',
//     title: 'first note',
//     body: 'this is my note',
//   },
//   {
//     id: '342',
//     title: 'another note',
//     body: 'this is her note',
//   },
// ];

// database.ref('note').set(notes);

// const firebaseConfig = {
//   apiKey: 'AIzaSyBxafpa-LIkLGgyyFmTQYwbZBqjpuP-M-s',
//   authDomain: 'expensify-a4e0b.firebaseapp.com',
//   databaseURL: 'https://expensify-a4e0b-default-rtdb.firebaseio.com',
//   projectId: 'expensify-a4e0b',
//   storageBucket: 'expensify-a4e0b.appspot.com',
//   messagingSenderId: '1046202153725',
//   appId: '1:1046202153725:web:da8e7a7a4a52365c7fdc94',
//   measurementId: 'G-PSTPRS62QJ',
// };
// Initialize Firebase
//firebase.initializeApp(firebaseConfig);
//firebase.analytics();

// const database = firebase.database();

// export {firebase, database as default}

// const expenses = [
//   {
//     description: 'coffee',
//     note: 'at starbacks',
//     amount: 5.7,
//     createdAt: 0,
//   },
//   {
//     description: 'rent',
//     note: 'last month',
//     amount: 500.7,
//     createdAt: 0,
//   },
//   {
//     description: 'dinner',
//     note: 'at pasta restaurant',
//     amount: 30.7,
//     createdAt: 0,
//   },
// ];
// expenses.forEach((expense) => {
//   database.ref('expenses').push(expense);
// });

// database.ref('expenses').once('value')
// .then((snapshot) => {
//   let expenses = []
//   snapshot.forEach((childSnapshot) => {
//     expenses.push({
//       id: childSnapshot.key,
//       ...childSnapshot.val()
//     })
//   })
//   console.log(expenses)
// })
// database.ref('expenses').on('value', (snapshot) => {
//   let expenses = []
//   snapshot.forEach((childSnapshot) => {
//     expenses.push({
//       id: childSnapshot.key,
//       ...childSnapshot.val()
//     })
//   })
//   console.log(expenses)
// }, (error) => {
//   console.log(error)
// })

// database.ref('expenses').on('child_changed', (snapshot) => {
//   console.log(snapshot.val())
// })
// database.ref('expenses').on('child_added', (snapshot) => {
//   console.log(snapshot.val())
// })

// database.ref('notes').push({
//   title: 'course topic',
//   body: 'firebase',
// });

// database
//   .ref('location/country')
//   .once('value')
//   .then((snapshot) => {
//     const val = snapshot.val();
//     console.log(val);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

// const onValueChange = database.ref().on(
//   'value',
//   (snapshot) => {
//     console.log(snapshot.val());
//   },
//   (error) => {
//     console.log('this failed', error);
//   }
// );
// setTimeout(() => {
//   database.ref().off('value', onValueChange);
// }, 2000);

// database.ref().on('value', (snapshot) => {
//   const val = snapshot.val()
//   console.log(`${val.name} is a ${val.job.title} at ${val.job.company}`);
// }, (error) => {
//   console.log('this failed', error)
// })
