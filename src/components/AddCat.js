import React, { Component } from 'react'
import styled from 'styled-components'
import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'
import FileUploader from 'react-firebase-file-uploader'
import base from '../base'

const UploadedImage = styled.img`
  width: 100%;
  max-width: 300px;
`

function writeUserData(userId, comment) {
  firebase
    .database()
    .ref(`users/${userId}`)
    .set({
      comment,
    })
}

class AddCat extends Component {
  state = {
    username: '',
    image: '',
    isUploading: false,
    progress: 0,
    avatarURL: '',
  }

  commentRef = React.createRef()

  handleChangeUsername = event => this.setState({ username: event.target.value })
  handleUploadStart = () => this.setState({ isUploading: true, progress: 0 })
  handleProgress = progress => this.setState({ progress })
  handleUploadError = error => {
    this.setState({ isUploading: false })
    console.error(error)
  }
  handleUploadSuccess = filename => {
    this.setState({ image: filename, progress: 100, isUploading: false })
    firebase
      .storage()
      .ref('images')
      .child(filename)
      .getDownloadURL()
      .then(url => this.setState({ avatarURL: url }, console.log(url)))
  }

  createCat = event => {
    event.preventDefault()
    console.log(event)

    const cat = {
      imageRef: this.commentRef.current.value,
    }
    writeUserData('WhiteCat', this.commentRef.current.value)
    // Refresh form
    console.log(cat)
  }

  render() {
    return (
      <section>
        <form>
          <h3>Upload your image</h3>
          <label htmlFor="image">Image:</label>
          {this.state.isUploading && <p>Progress: {this.state.progress}</p>}
          {this.state.avatarURL && <UploadedImage src={this.state.avatarURL} />}
          <FileUploader
            accept="image/*"
            name="image"
            randomizeFilename
            storageRef={firebase.storage().ref('images')}
            onUploadStart={this.handleUploadStart}
            onUploadError={this.handleUploadError}
            onUploadSuccess={this.handleUploadSuccess}
            onProgress={this.handleProgress}
          />
          <p>Add some text</p>
          <textarea ref={this.commentRef} name="comment" cols="30" rows="10" />
          <button onClick={this.createCat}>Clicketh me</button>
        </form>
      </section>
    )
  }
}

export default AddCat
