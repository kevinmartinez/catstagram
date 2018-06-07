import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import styled from 'styled-components'
import like from '../features/like'
import Header from './Header'
import Likes from '../containers/Likes'

const Container = styled.div`
  display: grid;
  width: 100%;
  max-width: 960px;
  margin: 0 auto;
`

class App extends Component {
  render() {
    const { count, increment, decrement } = this.props

    return (
      <Container>
        <Header />
        <Likes count={count} increment={increment} decrement={decrement} />
        {/* <AddCat /> */}
        {/* <section>
          <header>Scroll through cats</header>
          <Image />
        </section> */}
      </Container>
    )
  }
}

const mapStateToProps = state => ({
  count: like.selectors.getCounter(state),
})

const mapDispatchToProps = dispatch => ({
  increment: () => dispatch(like.actions.incrementCounter()),
  decrement: () => dispatch(like.actions.decrementCounter()),
})

App.propTypes = {
  increment: PropTypes.func.isRequired,
  decrement: PropTypes.func.isRequired,
  count: PropTypes.number.isRequired,
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
