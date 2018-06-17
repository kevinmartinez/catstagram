import React from 'react'
import Image from './Image'

const SingleImage = props => {
  const url = props.match.params.postId
  console.log(url)
  return (
    <div className="single-photo">
      <h1>adasd{url}</h1>
      <Image />
    </div>
  )
}

export default SingleImage
