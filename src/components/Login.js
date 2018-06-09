import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'
// This import loads the firebase namespace along with all its type information.
import firebase from 'firebase/app'
// These imports load individual services into the firebase namespace.
import 'firebase/auth'
import 'firebase/database'
import * as firebaseui from 'firebaseui'
import base from '../base'

// const uiConfig = {
//   signInFlow: 'popup',
//   signInOptions: [
//     // firebase.auth.GoogleAuthProvider.PROVIDER_ID,
//     firebase.auth.EmailAuthProvider.PROVIDER_ID,
//   ],
// }

const uiConfig = {
  callbacks: {
    signInSuccessWithAuthResult(authResult, redirectUrl) {
      // User successfully signed in.
      // Return type determines whether we continue the redirect automatically
      // or whether we leave that to developer to handle.
      return true
    },
    uiShown() {
      // The widget is rendered.
      // Hide the loader.
      document.getElementById('loader').style.display = 'none'
    },
  },
  // Will use popup for IDP Providers sign-in flow instead of the default, redirect.
  signInFlow: 'popup',
  signInSuccessUrl: '/feed/?mode=select&signInSuccessUrl=signedIn.html',
  signInOptions: [firebase.auth.EmailAuthProvider.PROVIDER_ID],
  // Terms of service url.
  tosUrl: '<your-tos-url>',
}

class Login extends Component {
  // // Get input value
  // const userName = this.userInput.current.value
  // // Change route to logged in user feed
  // this.props.history.push(`/feed/${userName}`)
  // }

  componentDidMount() {
    console.log('component mounted')
    // Initialize the FirebaseUI Widget using Firebase.
    const ui = new firebaseui.auth.AuthUI(firebase.auth())
    // Disable auto-sign in.
    ui.disableAutoSignIn()
    ui.start('#firebaseui-auth-container', uiConfig)
  }

  render() {
    return (
      <Fragment>
        <h1>Welcome to Catstagram</h1>
        <p>Login</p>
        <div id="firebaseui-auth-container">
          <input type="text" ref={this.userInput} required placeholder="Username" />
          <p>Register</p>
          <input type="text" placeholder="register" />
          <button type="submit">Enter</button>
          <div id="loader">Loading...</div>
        </div>
      </Fragment>
    )
  }
}

Login.propTypes = {
  history: PropTypes.object.isRequired,
}

export default Login
