import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import like from '../features/like'

const LikeCounter = ({ count, increment, decrement }) => (
  <Fragment>
    <div>{count}</div>
    <button onClick={increment}>+</button>
    <button onClick={decrement}>-</button>
  </Fragment>
)

const mapStateToProps = state => ({
  count: like.selectors.getCounter(state),
})

const mapDispatchToProps = dispatch => ({
  increment: () => dispatch(like.actions.incrementCounter()),
  decrement: () => dispatch(like.actions.decrementCounter()),
})

LikeCounter.propTypes = {
  increment: PropTypes.func.isRequired,
  decrement: PropTypes.func.isRequired,
  count: PropTypes.number.isRequired,
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LikeCounter)
