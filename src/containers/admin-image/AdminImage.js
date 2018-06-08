import React, { Component } from 'react'
import styled from 'styled-components'
import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'
import FileUploader from 'react-firebase-file-uploader'
// import Name from './Name'
import base from '../../base'
import AddImage from './AddImage'

const UploadedImage = styled.img`
  width: 100%;
  max-width: 300px;
`

class AdminImage extends Component {
  state = {
    username: '',
    image: '',
    isUploading: false,
    progress: 0,
    avatarURL: '',
  }

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

  render() {
    const { setName, name } = this.props
    return (
      <section>
        <div>
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
          <AddImage addImage={this.props.addImage} />
        </div>
      </section>
    )
  }
}

export default AdminImage