import firebase from 'firebase/compat/app'
import 'firebase/compat/firestore';


// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyBeGHEoJTN03WaY1_9RKrcwP8da3hw2u2c",
    authDomain: "carpinteriawg-7310e.firebaseapp.com",
    projectId: "carpinteriawg-7310e",
    storageBucket: "carpinteriawg-7310e.appspot.com",
    messagingSenderId: "850251530987",
    appId: "1:850251530987:web:4870c70f5b4a70f32334ae"
};
// Initialize Firebase
const fb = firebase.initializeApp(firebaseConfig);

export const db = fb.firestore();