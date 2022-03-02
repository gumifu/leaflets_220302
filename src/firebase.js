import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyBYqbVbWddqzaFrIXzgrPkA7uuCNlSoIFI",
  authDomain: "leaflets-95d9d.firebaseapp.com",
  projectId: "leaflets-95d9d",
  storageBucket: "leaflets-95d9d.appspot.com",
  messagingSenderId: "1066756590844",
  appId: "1:1066756590844:web:d7ac877a065491c0e85b79"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;
