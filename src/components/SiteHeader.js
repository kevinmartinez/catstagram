import React from 'react'
import { Link } from 'react-router-dom'
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
    <Title>
      <Link to="/"> Catstagram </Link>
    </Title>
    <SignedIn />
  </MainHeader>
)

export default SiteHeader
