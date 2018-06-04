import React from 'react'
import styled from 'styled-components'
import Menu from './Menu'

const MainHeader = styled.header`
  display: flex;
  border: 2px solid red;
`

const Title = styled.h1`
  text-transform: uppercase;
`

const Header = () => (
  <MainHeader>
    <Title>Catstagram</Title>
    <Menu />
  </MainHeader>
)

export default Header
