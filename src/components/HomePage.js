import React from 'react'
import styled from 'styled-components'
import Menu from './Menu'

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
    <Menu />
  </MainHeader>
)

export default HomePage
