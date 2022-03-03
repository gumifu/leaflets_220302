import { Button } from '@mui/material'
import React from 'react'
import firebase from "firebase/compat/app";
import { auth } from '../firebase';

const SignIn = () => {
    const signInWithGoogle = () => {
        //auth認証
        const provider = new firebase.auth.GoogleAuthProvider();
        //popアップのため
        auth.signInWithPopup(provider);
    }
  return (
    <div>
      <Button onClick={signInWithGoogle}>Sign in with Google</Button>
    </div>
  )
}

export default SignIn

