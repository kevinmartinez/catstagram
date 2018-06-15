import React, { Component } from 'react'
import { firebaseApp } from '../base'
import FileUploader from 'react-firebase-file-uploader'

import AddImage from './AddImage'

console.log(firebaseApp)

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
  handleImageName = name => this.setState({})
  handleUploadError = error => {
    this.setState({ isUploading: false })
    console.error(error)
  }
  handleUploadSuccess = filename => {
    this.setState({ image: filename, progress: 100, isUploading: false })
    console.log(this.state.image)
    firebaseApp
      .storage()
      .ref('images')
      .child(filename)
      .getDownloadURL()
      .then(url => this.setState({ avatarURL: url }, console.log(url)))
  }

  render() {
    // const { setName, name } = this.props
    return (
      <section>
        <div>
          <h3>Upload your image</h3>
          <label htmlFor="image">Image:</label>
          {this.state.isUploading && <p>Progress: {this.state.progress}</p>}
          {this.state.avatarURL && <img src={this.state.avatarURL} />}

          <FileUploader
            accept="image/*"
            name="image"
            randomizeFilename
            storageRef={firebaseApp.storage().ref('images')}
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
