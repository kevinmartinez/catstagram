import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  border: 5px solid blue;
  outline: 5px solid red;
  padding: 15px;
`

const Title = styled.h1`
  text-transform: uppercase;
  color: red;
`

const Login = () => (
  <Container>
    <Title>Welcome to Catstagram</Title>
    <p>Login</p>
    <p>Register</p>
  </Container>
)

export default Login
