import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import styled from 'styled-components'
import like from '../features/like'
import GetFeed from '../containers/GetFeed'
import AdminImage from '../containers/AdminImage'
import LikeCounter from '../containers/LikeCounter'

const Main = styled.main`
  img {
    display: inline-block;
    border-radius: 3px;
    padding: 0.5rem 0;
    margin: 0.5rem 1rem;
    max-width: 300px;
    background: transparent;
    color: white;
    border-bottom: 20px solid white;
  }
`
class FeedView extends React.Component {
  render() {
    const { count, increment, decrement } = this.props
    return (
      <Main>
        <GetFeed />
        <LikeCounter count={count} increment={increment} decrement={decrement} />
        <AdminImage />
      </Main>
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

FeedView.propTypes = {
  increment: PropTypes.func.isRequired,
  decrement: PropTypes.func.isRequired,
  count: PropTypes.number.isRequired,
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FeedView)
