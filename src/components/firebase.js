import firebase from "firebase/app";
import 'firebase/database';

const config = {
    apiKey: "AIzaSyC_Ccm8HSLDnRKazIG6D9z1T6rUBiqXsS4",
    authDomain: "kicks-app.firebaseapp.com",
    databaseURL: "https://kicks-app.firebaseio.com",
    projectId: "kicks-app",
    storageBucket: "kicks-app.appspot.com",
    messagingSenderId: "877843521480",
    appId: "1:877843521480:web:d032355e7a05d81ba12afd"
};

// Initialize Firebase
firebase.initializeApp(config);

export default firebase;