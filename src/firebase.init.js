// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAFWCkrRVlAu8e4Ao1a8xJjdhFYwfuDcNA",
    authDomain: "router-firebase-integrat-c1f4c.firebaseapp.com",
    projectId: "router-firebase-integrat-c1f4c",
    storageBucket: "router-firebase-integrat-c1f4c.appspot.com",
    messagingSenderId: "146382856671",
    appId: "1:146382856671:web:112a21fdf51033db86646a",
    measurementId: "G-RQ5JL50BZF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app;