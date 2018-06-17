import React from 'react'
import styled from 'styled-components'

const MainHeader = styled.header`
  display: flex;
  border: 2px sol id red;
`

const Title = styled.h1`
  text-transform: uppercase;
`

const HomePage = () => (
  <MainHeader>
    <Title>Catstagram</Title>
  </MainHeader>
)

export default HomePage
