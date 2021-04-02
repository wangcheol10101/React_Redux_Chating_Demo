import firebase from 'firebase';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyDRZJihD2Q1C2pIYBytuAaunw3ir-bjrnM',
  authDomain: 'web-quickstart-134f5.firebaseapp.com',
  databaseURL: 'https://web-quickstart-134f5.firebaseio.com',
  projectId: 'web-quickstart-134f5',
  storageBucket: 'web-quickstart-134f5.appspot.com',
  messagingSenderId: '662153069919',
  appId: '1:662153069919:web:73b54fd063db137d0ae2ea',
  measurementId: 'G-2LBKJGBPLJ',
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
