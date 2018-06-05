import React from 'react'
import styled from 'styled-components'

const Error = styled.div`
  border: 5px solid red;
  padding: 15px;
`

const Title = styled.h1`
  text-transform: uppercase;
  color: red;
`

const PageNotFound = () => (
  <Error>
    <Title>Ooops! There seems to be an error</Title>
  </Error>
)

export default PageNotFound
