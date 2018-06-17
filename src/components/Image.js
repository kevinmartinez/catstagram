import React from 'react'
import styled from 'styled-components'
import GetFeed from '../containers/GetFeed'
import LikeCounter from '../containers/LikeCounter'

const ImageContainer = styled.article`
  background: var(--purple);
  max-width: 90%;
  margin: 0 auto;
  text-align: center;
  img {
    max-width: 100%;
  }
  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  footer {
    display: flex;
    justify-content: flex-end;
  }
`

const Like = styled.div`
  padding: 5px;
  background: var(--green);
`

const Image = () => (
  <ImageContainer>
    <header>
      <h3>
        Added by: <span>Cat Catsson</span>
      </h3>
      <span>Date: 2025-01-01</span>
    </header>
    <GetFeed />
    <footer>
      <Like>
        <LikeCounter />
      </Like>
    </footer>
  </ImageContainer>
)

export default Image
