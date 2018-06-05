import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Container = styled.form`
  border: 5px solid blue;
  outline: 5px solid red;
  padding: 15px;
`

const Title = styled.h1`
  text-transform: uppercase;
  color: red;
`

class Login extends Component {
  // Create ref for username
  userInput = React.createRef()

  // Go to login function
  loginToFeed = event => {
    // Prevent default behaviour
    event.preventDefault()
    // Get input value
    const userName = this.userInput.current.value
    // Change route to logged in user feed
    this.props.history.push(`/feed/${userName}`)
  }

  render() {
    return (
      <Container onSubmit={this.loginToFeed}>
        <Title>Welcome to Catstagram</Title>
        <p>Login</p>
        <input type="text" ref={this.userInput} required placeholder="Username" />
        <p>Register</p>
        <input type="text" placeholder="register" />
        <button type="submit">Enter</button>
      </Container>
    )
  }
}

Login.propTypes = {
  history: PropTypes.object.isRequired,
}

export default Login
