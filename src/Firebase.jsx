import firebase from "firebase/compat/app";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCb_Pmcm7VXFH4-ieyNdkPRGHrK18BnHt8",
  authDomain: "authentication-app-57f6b.firebaseapp.com",
  projectId: "authentication-app-57f6b",
  storageBucket: "authentication-app-57f6b.appspot.com",
  messagingSenderId: "383119466485",
  appId: "1:383119466485:web:4ec45a372bd33037ec8abc",
  measurementId: "G-FXJ6WVL0CN",
};

firebase.initializeApp(firebaseConfig);

export default firebase;
