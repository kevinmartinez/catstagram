import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import styled from 'styled-components'
// Firebase.
import firebase from 'firebase/app'
import 'firebase/auth'
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth'
import base, { firebaseApp, auth } from '../base'
import like from '../features/like'
import Header from './Header'
import Likes from '../containers/Likes'
import AdminImage from '../containers/admin-image/AdminImage'
import Feed from './Feed'

const Container = styled.div`
  display: grid;
  width: 100%;
  max-width: 960px;
  margin: 0 auto;
`

class App extends Component {
  // State can be declared in a constructor
  // Or as a property
  state = {
    // Describe the state(s) that will be used for app
    // The methods that update state and the actual state
    // MUST live in the same component
    images: {},
    isSignedIn: undefined,
  }

  componentDidMount() {
    // Destruct meh
    const { params } = this.props.match
    // For re-base
    // Sync with name from match userId param
    // this.ref = base.syncState(`${this.props.match.params.userId}`)
    // store the db reference in this.ref so we can later unmount it when leaving
    this.ref = base.syncState(`${params.userId}`, {
      context: this,
      state: 'images',
    })
    // '/' makes us go deeper in objects in firebase
    this.unregisterAuthObserver = auth.onAuthStateChanged(user => {
      this.setState({ isSignedIn: !!user })
    })
  }

  componentWillUnmount() {
    this.unregisterAuthObserver()
  }

  uiConfig = {
    signInFlow: 'popup',
    signInOptions: [
      firebase.auth.GoogleAuthProvider.PROVIDER_ID,
      firebase.auth.EmailAuthProvider.PROVIDER_ID,
    ],
    callbacks: {
      signInSuccessWithAuthResult: () => false,
    },
  }

  addImage = image => {
    // In react when updating state, we need to
    // 1. take a copy of the existing state
    // copy the image object with object spread
    const images = { ...this.state.images }
    // 2. add our new image to the images var, setting uniquie id based on Date.now method
    images[`image${Date.now()}`] = image // image is passed in from AddImage "image" object
    // 3. Set the new images object to state with setState()
    this.setState({
      // Pass the piece of state that wish to update
      // images: images
      // ES6 shorthand, only images, w00t
      images,
    })
    console.log('Adding Image')
  }
  render() {
    const { count, increment, decrement, image } = this.props
    return (
      <Container>
        <h1>Catstagram</h1>
        {this.state.isSignedIn !== undefined &&
          !this.state.isSignedIn && (
            <div>
              <StyledFirebaseAuth uiConfig={this.uiConfig} firebaseAuth={firebaseApp.auth()} />
            </div>
          )}
        {this.state.isSignedIn && (
          <Fragment>
            <div>
              <h1>My App</h1>
              <p>Welcome {firebaseApp.auth().currentUser.displayName}! You are now signed-in!</p>
              <button onClick={() => firebaseApp.auth().signOut()}>Sign-out</button>
            </div>
            <Header />
            <Feed />
            <Likes count={count} increment={increment} decrement={decrement} />
            <AdminImage images={this.state.images} addImage={this.addImage} />
          </Fragment>
        )}
      </Container>
    )
  }
}

// Load the app in the browser.

// import React, { Component } from 'react'
// import PropTypes from 'prop-types'
// import { connect } from 'react-redux'
// import styled from 'styled-components'
// import like from '../features/like'
// import Header from './Header'
// import Likes from '../containers/Likes'
// import AdminImage from '../containers/admin-image/AdminImage'
// // These imports load individual services into the firebase namespace.
// import base from '../base'

// // import firebase from 'firebase'

// // let config = {
// //   //your settings from Firebase
// // };

// // //the root app just in case we need it
// // export const firebaseApp = firebase.initializeApp(config);

// const Container = styled.div`
//   display: grid;
//   width: 100%;
//   max-width: 960px;
//   margin: 0 auto;
// `

// class App extends Component {
//   // State can be declared in a constructor
//   // Or as a property
//   state = {
//     // Describe the state(s) that will be used for app
//     // The methods that update state and the actual state
//     // MUST live in the same component
//     images: {},
//   }

//   // Lifecycle events
//   componentDidMount() {
//     // Destruct meh
//     const { params } = this.props.match

//     // For re-base
//     // Sync with name from match userId param
//     // this.ref = base.syncState(`${this.props.match.params.userId}`)
//     // store the db reference in this.ref so we can later unmount it when leaving
//     this.ref = base.syncState(`${params.userId}`, {
//       context: this,
//       state: 'images',
//     })
//     // '/' makes us go deeper in objects in firebase
//   }

//   addImage = image => {
//     // In react when updating state, we need to
//     // 1. take a copy of the existing state
//     // copy the image object with object spread
//     const images = { ...this.state.images }
//     // 2. add our new image to the images var, setting uniquie id based on Date.now method
//     images[`image${Date.now()}`] = image // image is passed in from AddImage "image" object
//     // 3. Set the new images object to state with setState()
//     this.setState({
//       // Pass the piece of state that wish to update
//       // images: images
//       // ES6 shorthand, only images, w00t
//       images,
//     })
//     console.log('Adding Image')
//   }

//   render() {
//     const { count, increment, decrement } = this.props

//     return (
//       <Container>
//         <div>
//           {/* <h1>My App</h1>
//           <p>Welcome {firebaseApp.auth().currentUser.displayName}! You are now signed-in!</p>
//           <a onClick={() => firebaseApp.auth().signOut()}>Sign-out</a> */}
//         </div>
//         <Header />
//         <Likes count={count} increment={increment} decrement={decrement} />
//         <AdminImage images={this.state.images} addImage={this.addImage} />
//       </Container>
//     )
//   }
// }

const mapStateToProps = state => ({
  count: like.selectors.getCounter(state),
})

const mapDispatchToProps = dispatch => ({
  increment: () => dispatch(like.actions.incrementCounter()),
  decrement: () => dispatch(like.actions.decrementCounter()),
})

App.propTypes = {
  increment: PropTypes.func.isRequired,
  decrement: PropTypes.func.isRequired,
  count: PropTypes.number.isRequired,
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
