import React from 'react'
import styled from 'styled-components'
import SignedIn from '../containers/SignedIn'

const MainHeader = styled.header`
  display: flex;
  padding: 20px;
  background: var(--dark-purple);
  justify-content: space-between;

  p {
    color: var(--white);
  }
`

const Title = styled.h1`
  text-transform: uppercase;
  color: var(--white);
`

const SiteHeader = () => (
  <MainHeader>
    <Title>Catstagram</Title>
    <SignedIn />
  </MainHeader>
)

export default SiteHeader
