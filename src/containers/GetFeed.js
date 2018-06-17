import React, { Component } from 'react'
import { firebaseApp } from '../base'
import Img from '../components/Img'

class GetFeed extends Component {
  state = {}

  componentDidMount() {
    const storageRef = firebaseApp
      .storage()
      .ref()
      .child('images')
    const image = storageRef.child('467a4592-bb8e-4e97-a48c-b968c1f102e0.jpg') // Image Token

    console.dir(storageRef.child('images'))

    image.getDownloadURL().then(url => {
      this.setState({ img: url })
    })
    console.log('From GetFeed: ', this.state.img)
    console.log('From GetFeed: ', this.state)
  }
  render() {
    return <Img src={this.state.img} alt="cats are superstars" />
  }
}

export default GetFeed
