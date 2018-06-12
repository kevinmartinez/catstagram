import React, { Component } from 'react'
import { firebaseApp } from '../base'
import styled from 'styled-components'

const Image = styled.img`
  /* This renders the buttons above... Edit me! */
  display: inline-block;
  border-radius: 3px;
  padding: 0.5rem 0;
  margin: 0.5rem 1rem;
  width: 11rem;
  background: transparent;
  color: white;
  border: 2px solid white;
`
class Feed extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  componentDidMount() {
    const storageRef = firebaseApp
      .storage()
      .ref()
      .child('images')
    const image = storageRef.child('467a4592-bb8e-4e97-a48c-b968c1f102e0.jpg') // Image Token

    console.dir(storageRef)

    image.getDownloadURL().then(url => {
      this.setState({ img: url })
    })
    console.log(this.state.img)
  }
  render() {
    return (
      <div>
        <Image src={this.state.img} />
      </div>
    )
  }
}

export default Feed
