import { collection, getDocs, onSnapshot } from 'firebase/firestore';
import React, { useEffect, useState } from 'react'
import { db } from '../firebase'
import SendShops from './SendShops';
import SignOut from './SignOut'

const HomePage = () => {
    // const [shops, setShops] = useState([]);
    //  useEffect(() => {
    //      db.collection("shops").orderBy("timestamp")
    //          .limit(50)
    //          .onSnapshot((snapshot) => {
    //              setShops(snapshot.docs.map((doc) => doc.data()));
    //          });
// }, []);
      const [shops, setShops] = useState([]);

  useEffect(() => {
    // データ取得
    const shopData = collection(db, "shops");
    getDocs(shopData).then((snapShot) => {
      // console.log(snapShot.docs.map((doc) => ({ ...doc.data() })));
      setShops(snapShot.docs.map((doc) => ({ ...doc.data() })));
    });
    // console.log(shopData);

    // リアルタイム
    onSnapshot(shopData, (post) => {
      setShops(post.docs.map((doc) => ({ ...doc.data() })))
    })
  }, []);
  return (
      <div className='HomePage'>
          <SignOut/>
          leaflet'sへようこそ！
      <SendShops/>
          {console.log(shops)}
          <div className='shopsCard'>
              {shops.map(({ id, name, photoURL, uid ,place}) => (
                  <div>
                      <div key={id}>
                          <img src={photoURL} alt="" />
                          <p>{name}</p>
                          <p>{place}</p>
                    </div>
                </div>
              ))}
          </div>
    </div>
  )
}

export default HomePage

