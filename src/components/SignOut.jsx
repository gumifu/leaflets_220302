import { Button } from '@mui/material'
import React from 'react'
import { auth } from '../firebase'

const SignOut = () => {
  return (
    <div>
        <Button onClick={()=> auth.signOut()}>Sign out</Button>
    </div>
  )
}

export default SignOut

