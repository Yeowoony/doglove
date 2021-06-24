import firebase from 'firebase/app';
import 'firebase/database';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBb4ZJRJbIUa2uQRmzUjRAgRoqpxtGEVnI",
    authDomain: "withexer.firebaseapp.com",
    databaseURL: "https://withexer-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "withexer",
    storageBucket: "withexer.appspot.com",
    messagingSenderId: "886276565819",
    appId: "1:886276565819:web:58ff06fdd09c41e770651e",
    measurementId: "G-MRD2MMN1P9"
};

if (firebase.apps.length == 0) firebase.initializeApp(firebaseConfig);
export default firebase.database();