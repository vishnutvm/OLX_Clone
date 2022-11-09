import firebase from 'firebase'
import 'firebase/auth'
import 'firebase/firebase'
import 'firebase/storage'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDYMDm928kX7R16P4tHHSN8mLcQwYLbD28",
  authDomain: "praxis-road-309303.firebaseapp.com",
  projectId: "praxis-road-309303",
  storageBucket: "praxis-road-309303.appspot.com",
  messagingSenderId: "678480600240",
  appId: "1:678480600240:web:c950f285726a95f7ebef75",
  measurementId: "G-N3064JT6HK"
};
export default firebase.initializeApp(firebaseConfig)

