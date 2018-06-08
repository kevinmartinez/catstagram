import React, { Component } from 'react'

class AddImage extends Component {
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

    this.props.addImage(image)

    // Refresh form
    console.log(image)
    event.currentTarget.reset()
  }

  render() {
    return (
      <form action="" onSubmit={this.createImage}>
        <input name="name" ref={this.nameRef} type="text" placeholder="Name" />
        <textarea name="desc" ref={this.commentRef} />
        <input name="image" ref={this.imageRef} type="text" placeholder="Image" />
        <button type="submit">Add Fish</button>
      </form>
    )
  }
}

export default AddImage
