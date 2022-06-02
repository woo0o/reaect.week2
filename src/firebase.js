// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAqmCx8Pp1eAcc-4q5e4qEbk07xqmEUthk",
    authDomain: "sparta-react-basic-1808f.firebaseapp.com",
    projectId: "sparta-react-basic-1808f",
    storageBucket: "sparta-react-basic-1808f.appspot.com",
    messagingSenderId: "165141786509",
    appId: "1:165141786509:web:dbddbec2e18f520ab3d7c4",
    measurementId: "G-BP3156VC3B"
};


initializeApp(firebaseConfig);
// Initialize Firebase
// const app = initializeApp(firebaseConfig);


export const db = getFirestore();