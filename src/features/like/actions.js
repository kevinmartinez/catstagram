export const INCREMENT = 'INCREMENT'
export const DECREMENT = 'DECREMENT'

const incrementCounter = () => ({
  type: INCREMENT,
})

const decrementCounter = () => ({
  type: DECREMENT,
})

export { incrementCounter, decrementCounter }
