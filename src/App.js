import { useEffect, useState } from 'react';
import './App.css';
import { db } from "./firebase";
import {auth} from "./firebase"
import { collection, getDocs, onSnapshot } from "firebase/firestore";
import SignIn from './components/SignIn';
import { useAuthState } from "react-firebase-hooks/auth";
import HomePage from './components/HomePage';


function App() {
  const [user] = useAuthState(auth);
  // const [shops, setShops] = useState([]);

  // useEffect(() => {
  //   // データ取得
  //   const shopData = collection(db, "shops");
  //   getDocs(shopData).then((snapShot) => {
  //     // console.log(snapShot.docs.map((doc) => ({ ...doc.data() })));
  //     setShops(snapShot.docs.map((doc) => ({ ...doc.data() })));
  //   });
  //   // console.log(shopData);

  //   // リアルタイム
  //   onSnapshot(shopData, (post) => {
  //     setShops(post.docs.map((doc) => ({ ...doc.data() })))
  //   })
  // }, []);

  return (
    <div className="App">
      {user ? <HomePage /> : <SignIn /> }
      {/* <div key={shops.id}>
      {shops.map((shop) => (
        <div>
          <h1>{shop.name}</h1>
          <p>{shop.place}</p>
        </div>
      ))}
      </div> */}
    </div>
  );
}

export default App;
