// import { initializeApp } from "firebase/app";
// import { getFirestore } from "firebase/firestore";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import 'firebase/compat/firestore';
import "firebase/compat/storage";

if (!firebase.apps.length) {
    const firebaseConfig = {
        apiKey: "AIzaSyBYqbVbWddqzaFrIXzgrPkA7uuCNlSoIFI",
        authDomain: "leaflets-95d9d.firebaseapp.com",
        projectId: "leaflets-95d9d",
        storageBucket: "leaflets-95d9d.appspot.com",
        messagingSenderId: "1066756590844",
        appId: "1:1066756590844:web:d7ac877a065491c0e85b79"
    };
    firebase.initializeApp(firebaseConfig);
}
// const db = getFirestore(app);
    const auth = firebase.auth();
const db = firebase.firestore();
const storage = firebase.storage();
    export { db, auth ,storage};
