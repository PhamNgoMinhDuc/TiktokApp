import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore/lite";
// Follow this pattern to import other Firebase services
// import { } from 'firebase/<service>';

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
    apiKey: "AIzaSyDS7BKM0lvsp_j91Gw-8pAzgm5BMgaJhN8",
    authDomain: "tiktok-app-9ce72.firebaseapp.com",
    projectId: "tiktok-app-9ce72",
    storageBucket: "tiktok-app-9ce72.appspot.com",
    messagingSenderId: "275719043914",
    appId: "1:275719043914:web:0e01a9f5b487c5b9125fb3",
    measurementId: "G-GML08Z3VZQ",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);