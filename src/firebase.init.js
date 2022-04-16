// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDvosY0dOpNyhf9ApMsJ30vwddcV8SEf7o",
    authDomain: "router-firebase-integrat-8da0d.firebaseapp.com",
    projectId: "router-firebase-integrat-8da0d",
    storageBucket: "router-firebase-integrat-8da0d.appspot.com",
    messagingSenderId: "261006464322",
    appId: "1:261006464322:web:0d9e9a036b079e3d0f24db",
    measurementId: "G-35LDWKNYKY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app;