// Import FirebaseAuth and firebase.
import React from 'react'
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth'
import { googleProvider, emailProvider, auth } from '../base'
// // // //   signInSuccessUrl: '/',
// Configure FirebaseUI.
// const uiConfig = {
//   // Popup signin flow rather than redirect flow.
//   signInFlow: 'popup',
//   // Redirect to /signedIn after sign in is successful. Alternatively you can provide a callbacks.signInSuccess function.
//   signInSuccessUrl: '/feed/',
//   // We will display Google and Facebook as auth providers.
//   signInOptions: [auth.EmailAuthProvider.PROVIDER_ID, auth.FacebookAuthProvider.PROVIDER_ID],
// }

class SignInScreen extends React.Component {
  uiConfig = {
    signInFlow: 'popup',
    signInOptions: [googleProvider.providerId, emailProvider.providerId],
    callbacks: {
      signInSuccessWithAuthResult: () => false,
    },
  }
  render() {
    return (
      <div>
        <h1>My App</h1>
        <p>Please signus-in:</p>
        <StyledFirebaseAuth uiConfig={this.uiConfig} firebaseAuth={auth} />
      </div>
    )
  }
}

export default SignInScreen

// import React, { Component } from 'react'
// import { Redirect } from 'react-router-dom'
// import firebase from 'firebase/app'
// import { firebaseApp, isAuthenticated, storageKey, db, auth } from '../base'
// // These imports load individual services into the firebase namespace.
// import 'firebase/auth'
// import 'firebase/database'
// import 'firebase/firestore'

// import base from '../base'

// class Login extends Component {
//   state = {
//     email: '',
//     password: '',
//     redirectToReferrer: false,
//   }

//   handleSubmit = evt => {
//     evt.preventDefault()
//     auth.signInWithEmailAndPassword(this.state.email, this.state.password).then(() => {
//       this.setState({ redirectToReferrer: true })
//     })
//   }

//   render() {
//     const { from } = this.props.location.state || '/'
//     const { redirectToReferrer } = this.state

//     return (
//       <section>
//         {redirectToReferrer && <Redirect to={from || '/protected'} />}
//         {from && <p>You must log in to view the page at {from.pathname}</p>}
//         <form onSubmit={this.handleSubmit}>
//           <input
//             type="text"
//             value={this.state.email}
//             onChange={e => this.setState({ email: e.target.value })}
//           />
//           <input
//             type="password"
//             value={this.state.password}
//             onChange={e => this.setState({ password: e.target.value })}
//           />
//           <button type="submit">Sign In</button>
//         </form>
//       </section>
//     )
//   }
// }

// export default Login

// // // Import FirebaseAuth and firebase.
// // import React from 'react'

// // import firebase from 'firebase/app'
// // import { firebaseApp } from '../base'
// // import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth'
// // import base from '../base'
// // import 'firebase/auth'
// // import 'firebase/database'
// // import 'firebase/firestore'

// // // import firebase from 'firebase'

// // // Configure Firebase.
// // // const config = {
// // //   apiKey: 'AIzaSyAeue-AsYu76MMQlTOM-KlbYBlusW9c1FM',
// // //   authDomain: 'myproject-1234.firebaseapp.com',
// // //   // ...
// // // }

// // class Login extends React.Component {
// //   // Configure FirebaseUI.
// //   uiConfig = {
// //     // Popup signin flow rather than redirect flow.
// //     signInFlow: 'popup',
// //     // Redirect to /signedIn after sign in is successful. Alternatively you can provide a callbacks.signInSuccess function.
// //     signInSuccessUrl: '/feed/',

// //     // We will display Google and Facebook as auth providers.
// //     signInOptions: [firebase.auth.EmailAuthProvider.PROVIDER_ID],
// //   }
// //   render() {
// //     return (
// //       <div>
// //         <h1>My App</h1>
// //         <p>Please sign-in:</p>
// //         <StyledFirebaseAuth uiConfig={this.uiConfig} firebaseAuth={firebaseApp.auth()} />
// //       </div>
// //     )
// //   }
// // }

// // export default Login

// // // // Import FirebaseAuth and firebase.
// // // import React from 'react'
// // // import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth'
// // // import firebaseApp from '../base'

// // // console.log(firebaseApp.auth)
// // // // // Configure Firebase.
// // // // const config = {
// // // //   apiKey: 'AIzaSyAeue-AsYu76MMQlTOM-KlbYBlusW9c1FM',
// // // //   authDomain: 'myproject-1234.firebaseapp.com',
// // // //   // ...
// // // // }
// // // // firebaseA.initializeApp(config)

// // // class Login extends React.Component {
// // //   // The component's Local state.
// // //   state = {
// // //     isSignedIn: false, // Local signed-in state.
// // //   }

// // //   // Configure FirebaseUI.
// // //   uiConfig = {
// // //     // Popup signin flow rather than redirect flow.
// // //     signInFlow: 'popup',
// // //     // We will display Google and Facebook as auth providers.
// // //     signInOptions: firebaseApp.auth.EmailAuthProvider.PROVIDER_ID,
// // //     callbacks: {
// // //       // Avoid redirects after sign-in.
// // //       signInSuccessWithAuthResult: () => false,
// // //     },
// // //   }

// // //   // Listen to the Firebase Auth state and set the local state.
// // //   componentDidMount() {
// // //     this.unregisterAuthObserver = firebaseApp
// // //       .auth()
// // //       .onAuthStateChanged(user => this.setState({ isSignedIn: !!user }))
// // //   }

// // //   // Make sure we un-register Firebase observers when the component unmounts.
// // //   componentWillUnmount() {
// // //     this.unregisterAuthObserver()
// // //   }

// // //   render() {
// // //     if (!this.state.isSignedIn) {
// // //       return (
// // //         <div>
// // //           <h1>My App</h1>
// // //           <p>Please sign-in:</p>
// // //           <StyledFirebaseAuth uiConfig={this.uiConfig} firebaseAuth={firebaseApp.auth()} />
// // //         </div>
// // //       )
// // //     }
// // //     return (
// // //       <div>
// // //         <h1>My App</h1>
// // //         <p>Welcome {firebaseApp.auth().currentUser.displayName}! You are now signed-in!</p>
// // //         <a onClick={() => firebaseApp.auth().signOut()}>Sign-out</a>
// // //       </div>
// // //     )
// // //   }
// // // }

// // // export default Login

// // // // /**
// // // //  * Copyright 2017 Google Inc. All Rights Reserved.
// // // //  *
// // // //  * Licensed under the Apache License, Version 2.0 (the "License");
// // // //  * you may not use this file except in compliance with the License.
// // // //  * You may obtain a copy of the License at
// // // //  *
// // // //  *      http://www.apache.org/licenses/LICENSE-2.0
// // // //  *
// // // //  * Unless required by applicable law or agreed to in writing, software
// // // //  * distributed under the License is distributed on an "AS IS" BASIS,
// // // //  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// // // //  * See the License for the specific language governing permissions and
// // // //  * limitations under the License.
// // // //  */

// // // // // React core.
// // // // import React from 'react'
// // // // import ReactDOM from 'react-dom'

// // // // // Firebase.
// // // // import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth'

// // // // import 'firebase/auth'
// // // // import { firebaseApp } from '../base'

// // // // // Styles
// // // // // import styles from './app.css' // This uses CSS modules.
// // // // // import './firebaseui-styling.global.css' // Import globally.

// // // // // Get the Firebase config from the auto generated file.
// // // // // const firebaseConfig = require('./firebase-config.json').result
// // // // // const ui = new firebaseui.auth.AuthUI(firebase.auth())
// // // // // Instantiate a Firebase app.
// // // // // const firebaseApp = firebase.initializeApp(firebaseConfig)

// // // // /**
// // // //  * The Splash Page containing the login UI.
// // // //  */
// // // // class Login extends React.Component {
// // // //   uiConfig = {
// // // //     signInFlow: 'popup',
// // // //     signInOptions: [firebaseApp.auth.EmailAuthProvider.PROVIDER_ID],
// // // //     callbacks: {
// // // //       signInSuccessWithAuthResult: () => false,
// // // //     },
// // // //   }

// // // //   state = {
// // // //     isSignedIn: undefined,
// // // //   }

// // // //   /**
// // // //    * @inheritDoc
// // // //    */
// // // //   componentDidMount() {
// // // //     this.unregisterAuthObserver = firebaseApp.auth().onAuthStateChanged(user => {
// // // //       this.setState({ isSignedIn: !!user })
// // // //     })
// // // //   }

// // // //   /**
// // // //    * @inheritDoc
// // // //    */
// // // //   componentWillUnmount() {
// // // //     this.unregisterAuthObserver()
// // // //   }

// // // //   /**
// // // //    * @inheritDoc
// // // //    */
// // // //   render() {
// // // //     return (
// // // //       <div>
// // // //         <div>
// // // //           <i>photo</i> My App
// // // //         </div>
// // // //         <div>This is a cool demo app</div>
// // // //         {this.state.isSignedIn !== undefined &&
// // // //           !this.state.isSignedIn && (
// // // //             <div>
// // // //               <StyledFirebaseAuth uiConfig={this.uiConfig} firebaseAuth={firebaseApp.auth()} />
// // // //             </div>
// // // //           )}
// // // //         {this.state.isSignedIn && (
// // // //           <div>
// // // //             Hello {firebaseApp.auth().currentUser.displayName}. You are now signed In!
// // // //             <button onClick={() => firebaseApp.auth().signOut()}>Sign-out</button>
// // // //           </div>
// // // //         )}
// // // //       </div>
// // // //     )
// // // //   }
// // // // }

// // // // export default Login

// // // // import React, { Component, Fragment } from 'react'
// // // // import PropTypes from 'prop-types'
// // // // // This import loads the firebase namespace along with all its type information.
// // // // import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth'
// // // // import firebase from 'firebase'
// // // // import base from '../base'

// // // // // const uiConfig = {
// // // // //   signInFlow: 'popup',
// // // // //   signInOptions: [
// // // // //     // firebase.auth.GoogleAuthProvider.PROVIDER_ID,
// // // // //     firebase.auth.EmailAuthProvider.PROVIDER_ID,
// // // // //   ],
// // // // // }

// // // // const uiConfig = {
// // // //   callbacks: {
// // // //     signInSuccessWithAuthResult(authResult, redirectUrl) {
// // // //       // User successfully signed in.
// // // //       // Return type determines whether we continue the redirect automatically
// // // //       // or whether we leave that to developer to handle.
// // // //       return true
// // // //     },
// // // //     uiShown() {
// // // //       // The widget is rendered.
// // // //       // Hide the loader.
// // // //       document.getElementById('loader').style.display = 'none'
// // // //     },
// // // //   },
// // // //   // Will use popup for IDP Providers sign-in flow instead of the default, redirect.
// // // //   signInFlow: 'popup',
// // // //   signInSuccessUrl: '/feed/?mode=select&signInSuccessUrl=signedIn.html',
// // // //   signInOptions: [firebase.auth.EmailAuthProvider.PROVIDER_ID],
// // // //   // Terms of service url.
// // // //   tosUrl: '<your-tos-url>',
// // // // }

// // // // class Login extends Component {
// // // //   // // Get input value
// // // //   // const userName = this.userInput.current.value
// // // //   // // Change route to logged in user feed
// // // //   // this.props.history.push(`/feed/${userName}`)
// // // //   // }

// // // //   componentDidMount() {
// // // //     console.log('component mounted')
// // // //     // Initialize the FirebaseUI Widget using Firebase.
// // // //     const ui = new firebaseui.auth.AuthUI(firebase.auth())
// // // //     // Disable auto-sign in.
// // // //     ui.disableAutoSignIn()
// // // //     ui.start('#firebaseui-auth-container', uiConfig)
// // // //   }

// // // //   render() {
// // // //     return (
// // // //       <Fragment>
// // // //         <h1>Welcome to Catstagram</h1>
// // // //         <p>Login</p>
// // // //         <div id="firebaseui-auth-container">
// // // //           <input type="text" ref={this.userInput} required placeholder="Username" />
// // // //           <p>Register</p>
// // // //           <input type="text" placeholder="register" />
// // // //           <button type="submit">Enter</button>
// // // //           <div id="loader">Loading...</div>
// // // //         </div>
// // // //       </Fragment>
// // // //     )
// // // //   }
// // // // }

// // // // Login.propTypes = {
// // // //   history: PropTypes.object.isRequired,
// // // // }

// // // // export default Login
