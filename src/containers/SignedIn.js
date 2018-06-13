import React from 'react'
import { auth } from '../base'

const SignedIn = () => (
  <div>
    <p>Welcome {auth.currentUser.displayName}! You are now signed-in!</p>
    <button onClick={() => auth.signOut()}>Sign-out</button>
  </div>
)

export default SignedIn
