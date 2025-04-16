import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { collection, addDoc, query, where, getDocs } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC7y3ps4cngzvLKXhzmekLOfRPGdXVH5-k",
  authDomain: "wisdomclinic-a89e3.firebaseapp.com",
  projectId: "wisdomclinic-a89e3",
  storageBucket: "wisdomclinic-a89e3.firebasestorage.app",
  messagingSenderId: "8963973958",
  appId: "1:8963973958:web:f4f0e87f35aa838c817b47",
  measurementId: "G-6ZLMZ820TX"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db, collection, addDoc, query, where, getDocs };


// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyC7y3ps4cngzvLKXhzmekLOfRPGdXVH5-k",
//   authDomain: "wisdomclinic-a89e3.firebaseapp.com",
//   projectId: "wisdomclinic-a89e3",
//   storageBucket: "wisdomclinic-a89e3.firebasestorage.app",
//   messagingSenderId: "8963973958",
//   appId: "1:8963973958:web:f4f0e87f35aa838c817b47",
//   measurementId: "G-6ZLMZ820TX"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);