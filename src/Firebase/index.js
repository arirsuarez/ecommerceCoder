import * as firebase from 'firebase/app';
import 'firebase/firestore';

const app = firebase.initializeApp({
    apiKey: "AIzaSyAo5a2nHzOHGMbBlQHlDLZrKl2hOShuoVU",
    authDomain: "ecommerce-coder.firebaseapp.com",
    databaseURL: "https://ecommerce-coder.firebaseio.com",
    projectId: "ecommerce-coder",
    storageBucket: "ecommerce-coder.appspot.com",
    messagingSenderId: "434819220628",
    appId: "1:434819220628:web:0dced864fe103700aea081"
});

export function getFirebase() {
    return app;
}

export function getFirestore() {
    return firebase.firestore(app);
}