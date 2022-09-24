import firebase from 'firebase';
import 'firebase/auth';
import 'firebase/firebase'
import 'firebase/storage'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCDl9M8uM0betchTfpu4Nps8cEwmqUntvs",
    authDomain: "olx-clone-ddaa6.firebaseapp.com",
    projectId: "olx-clone-ddaa6",
    storageBucket: "olx-clone-ddaa6.appspot.com",
    messagingSenderId: "382482538178",
    appId: "1:382482538178:web:d97c22023255243e89e55b",
    measurementId: "G-JK7PCVW5D3"
  };

  export default  firebase.initializeApp(firebaseConfig)