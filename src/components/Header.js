import React from 'react'
import styled from 'styled-components'
import Menu from './Menu'
import SignedIn from '../containers/SignedIn'

const MainHeader = styled.header`
  display: flex;
  border: 2px solid red;
  padding: 20px;
  background: greenyellow;
`

const Title = styled.h1`
  text-transform: uppercase;
`

const Header = () => (
  <MainHeader>
    <Title>Catstagram</Title>
    <SignedIn />
    <Menu />
  </MainHeader>
)

export default Header
