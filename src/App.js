import React, { Component, Fragment } from 'react'
import { Link, Route, Switch } from 'react-router-dom'
import styled from 'styled-components'
// Firebase.
import { auth } from './base'
// Import CSS reset and Global Styles
import './global-styles'
import FeedView from './components/FeedView'
import SignInScreen from './containers/SignInScreen'
import PageNotFound from './components/PageNotFound'
import ImageGrid from './components/ImageGrid'
import SingleImage from './components/SingleImage'
// const Container = styled.div`
//   display: grid;
//   width: 100%;
//   max-width: 960px;
//   margin: 0 auto;
// `

class App extends Component {
  // State can be declared in a constructor
  // Or as a property
  state = {
    // Describe the state(s) that will be used for app
    // The methods that update state and the actual state
    // MUST live in the same component
    // images: {},
    isSignedIn: undefined,
  }

  componentDidMount() {
    // Destruct meh
    // const { params } = this.props.match
    // For re-base
    // Sync with name from match userId param
    // this.ref = base.syncState(`${this.props.match.params.userId}`)
    // store the db reference in this.ref so we can later unmount it when leaving
    // this.ref = base.syncState(`${params.userId}`, {
    //   context: this,
    //   state: 'images',
    // })
    // '/' makes us go deeper in objects in firebase
    this.unregisterAuthObserver = auth.onAuthStateChanged(user => {
      this.setState({ isSignedIn: !!user })
    })
  }

  componentWillUnmount() {
    this.unregisterAuthObserver()
  }

  // addImage = image => {
  //   // In react when updating state, we need to
  //   // 1. take a copy of the existing state
  //   // copy the image object with object spread
  //   const images = { ...this.state.images }
  //   // 2. add our new image to the images var, setting uniquie id based on Date.now method
  //   images[`image${Date.now()}`] = image // image is passed in from AddImage "image" object
  //   // 3. Set the new images object to state with setState()
  //   this.setState({
  //     // Pass the piece of state that wish to update
  //     // images: images
  //     // ES6 shorthand, only images, w00t
  //     images,
  //   })
  //   console.log('Adding Image')
  // }
  render() {
    const props = this.props
    return (
      <Fragment>
        {this.state.isSignedIn !== undefined && !this.state.isSignedIn && <SignInScreen />}
        {this.state.isSignedIn && (
          /* Route components are rendered if the path prop matches the current URL */
          <Switch>
            <Route exact path="/" component={ImageGrid} />
            <Route
              path={`${props.match.url}view/:postId`}
              render={({ match }) => <SingleImage {...props} match={match} />}
            />
            <Route component={PageNotFound} />
          </Switch>
        )
        //  <Route path="/category" component={Category}/>
        //  <Route path="/products" component={Products}/>
        }
      </Fragment>
    )
  }
}

export default App
