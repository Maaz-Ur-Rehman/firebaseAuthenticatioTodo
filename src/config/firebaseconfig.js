// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBt9p8al07yvDA4nHs4oNCmmMgrFH9AKHA",
  authDomain: "loginsignup-2f573.firebaseapp.com",
  projectId: "loginsignup-2f573",
  storageBucket: "loginsignup-2f573.appspot.com",
  messagingSenderId: "273944546961",
  appId: "1:273944546961:web:2a0ab937dd1858cd2b7930",
  measurementId: "G-9N1G269YS7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export default app