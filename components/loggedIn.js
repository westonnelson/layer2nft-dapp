// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDM-QKJ2E1XV67LYstylLLIJS-2qeKFnEw",
  authDomain: "layer2-b9af0.firebaseapp.com",
  projectId: "layer2-b9af0",
  storageBucket: "layer2-b9af0.appspot.com",
  messagingSenderId: "411327514080",
  appId: "1:411327514080:web:d78ec1d4a2f410d20a5785",
  measurementId: "G-HR7MCT5J5G"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);