import React, { Component } from 'react'
import PropTypes from 'prop-types'
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

App.propTypes = {
  increment: PropTypes.func.isRequired,
  decrement: PropTypes.func.isRequired,
  count: PropTypes.number.isRequired,
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
