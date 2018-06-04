import React from 'react'
import styled from 'styled-components'
import cat1 from '../img/cat1.jpg'

const ImageContainer = styled.article`
  width: 100%;
  max-width: 600px;
  margin: 0 auto;
  text-align: center;
`

const CatImage = styled.img`
  width: 100%;
  max-width: 400px;
`

const Image = () => (
  <ImageContainer>
    <header>
      <h3>
        Added by: <span>Cat Catsson</span>
      </h3>
      <span>Date: 2025-01-01</span>
    </header>
    <CatImage src={cat1} alt="" />
    <footer>
      <span>Likes</span>
    </footer>
  </ImageContainer>
)

export default Image
