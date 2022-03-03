import React, { useState } from 'react';
import firebase from "firebase/compat/app";
import { db,auth } from '../firebase';

const SendShops = () => {
    const [shopName, setShopName] = useState("");
    const [shopPlace, setShopPlace] = useState("");
    const sendShopInfo = (e) => {//eは再ロードさせないために使用
        e.preventDefault();//再ロードを防ぐ
        const { uid, photoURL } = auth.currentUser;
        db.collection("shops").add({
            name: shopName,
            place: shopPlace,
            photoURL,
            uid,
            timeStamp:firebase.firestore.FieldValue.serverTimestamp(),
        });
        setShopName("");
        setShopPlace("");
    }
  return (
    <div>
          <form action="" onSubmit={sendShopInfo}>
              <div>
                  <input type="text" placeholder='店名' onChange={(e) => setShopName(e.target.value)} value={shopName}/>
              </div>
              
                  {/* <input type="text" placeholder='場所' onChange={(e) => setShopPlace(e.target.value)} value={shopPlace}/> */}
      </form>
    </div>
  )
}

export default SendShops

