import firebase from 'firebase/compat/app';
import 'firebase/compat/auth'


export const firebaseConfig = {
  apiKey: "AIzaSyBeGHEoJTN03WaY1_9RKrcwP8da3hw2u2c",
  authDomain: "carpinteriawg-7310e.firebaseapp.com",
  projectId: "carpinteriawg-7310e",
  storageBucket: "carpinteriawg-7310e.appspot.com",
  messagingSenderId: "850251530987",
  appId: "1:850251530987:web:4870c70f5b4a70f32334ae"
};

const fire = firebase.initializeApp(firebaseConfig);

export default fire