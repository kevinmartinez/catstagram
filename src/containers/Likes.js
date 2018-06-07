import React from 'react'
import PropTypes from 'prop-types'

const Likes = ({ count, increment, decrement }) => (
  <div>
    <p>{count}</p>
    <button onClick={increment}>+</button>
    <button onClick={decrement}>-</button>
  </div>
)

Likes.propTypes = {
  increment: PropTypes.func.isRequired,
  decrement: PropTypes.func.isRequired,
  count: PropTypes.number.isRequired,
}

export default Likes