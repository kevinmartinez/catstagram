import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Image from './Image'

const ImageWrap = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
`

const ImageGrid = () => (
  <ImageWrap>
    <Image />
    <Image />
    <Image />
    <Image />
    <Image />
    <Image />
  </ImageWrap>
)

export default ImageGrid
