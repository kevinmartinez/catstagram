import React, { Component } from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'
// import { createLike } from '../actions/likes'
import Header from './Header'
// import Image from './Image'
import AddCat from './AddCat'

const Container = styled.div`
  display: grid;
  width: 100%;
  max-width: 960px;
  margin: 0 auto;
`

class App extends Component {
  // handleChange = e => {
  //   e.preventDefault()
  //   const item = e.target.querySelector('input').value
  //   this.props.likes(item)
  // }

  render() {
    return (
      <Container>
        <Header />
        {/* Set up and test the like state */}
        <section>
          <p>{this.props.count}</p>
          <button onClick={this.props.increment}>+</button>
          <button onClick={this.props.decrement}>-</button>
        </section>
        {/* <AddCat /> */}
        {/* <section>
          <header>Scroll through cats</header>
          <Image />
        </section> */}
      </Container>
    )
  }
}

function mapStateToProps(state) {
  return {
    count: state,
  }
}
function mapDispatchToProps(dispatch) {
  return {
    increment: () => dispatch({ type: 'INCREMENT' }),
    decrement: () => dispatch({ type: 'DECREMENT' }),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
