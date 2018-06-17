import React, { Component } from 'react'
import base, { firebaseApp } from '../base'
import FileUploader from 'react-firebase-file-uploader'

import AddImage from './AddImage'
import Img from '../components/Img'

console.log(firebaseApp)

class AdminImage extends Component {
  state = {
    image: '',
    isUploading: false,
    progress: 0,
    avatarURL: '',
    images: {},
  }

  componentDidMount() {
    // Destruct meh
    // const { params } = this.match
    // For re-base
    // Sync with name from match userId param
    // this.ref = base.syncState(`${params.userId}/feed`)
    // store the db reference in this.ref so we can later unmount it when leaving
    // this.ref = base.syncState(`${this.match.params.userId}`, {
    //   context: this,
    //   state: 'images',
    // })
    // '/' makes us go deeper in objects in firebase
    base.syncState(`shoppingList`, {
      context: this,
      state: 'images',
      asArray: true,
    })
  }

  componentWillUnmount() {
    // base.removeBinding(this.ref)
  }

  nameRef = React.createRef()
  commentRef = React.createRef()
  imageRef = React.createRef()

  createImage = event => {
    event.preventDefault()

    const image = {
      nameRef: this.nameRef.current.value,
      commentRef: this.commentRef.current.value,
      imageRef: this.imageRef.current.value,
    }

    this.addImage(image)

    // Refresh form
    console.log(image)
    event.currentTarget.reset()
  }

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
    // const { setName, name } = this.props
    return (
      <section>
        <div>
          <h3>Upload your image</h3>
          <label htmlFor="image">Image:</label>
          {this.state.isUploading && <p>Progress: {this.state.progress}</p>}
          {this.state.avatarURL && <Img src={this.state.avatarURL} />}

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
          <AddImage addImage={this.addImage} />
        </div>
      </section>
    )
  }
}

export default AdminImage
