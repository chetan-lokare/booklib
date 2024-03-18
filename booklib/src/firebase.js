import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyB5-2osXqhOiyODv5CLPFfgCkTfLSKOLeY",
  authDomain: "booklib-ch.firebaseapp.com",
  projectId: "booklib-ch",
  storageBucket: "booklib-ch.appspot.com",
  messagingSenderId: "781140809386",
  appId: "1:781140809386:web:75a046e9a8296d7f04e2d3",
  measurementId: "G-EDCB11D8J3"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);