import React from 'react'
import styled from 'styled-components'
import SignedIn from '../containers/SignedIn'

const Main = styled.main`
  background: red;
  img {
    display: inline - block;
    border-radius: 3px;
    padding: 0.5rem 0;
    margin: 0.5rem 1rem;
    width: 11rem;
    background: transparent;
    color: white;
    border: 2px solid white;
  }
`
const Feed = () => <SignedIn />

export default Feed
