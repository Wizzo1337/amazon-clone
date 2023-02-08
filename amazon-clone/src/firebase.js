// For Firebase JS SDK v7.20.0 and later, measurementId is optional

import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyDhSUvM1V5mfktWE-VsZWJnIpFEtgv2hkg',
  authDomain: 'challenge-f9b45.firebaseapp.com',
  projectId: 'challenge-f9b45',
  storageBucket: 'challenge-f9b45.appspot.com',
  messagingSenderId: '500889108305',
  appId: '1:500889108305:web:f4fd8e7a0db338e69edd70',
  measurementId: 'G-DHFXMD0R4X',
}

const firebaseApp = firebase.initializeApp(firebaseConfig)

const db = firebaseApp.firestore()
const auth = firebase.auth()

export {db, auth}
