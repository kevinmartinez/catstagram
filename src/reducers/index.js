const counter = (state = 0, action) => {
  // If reducer recieves undefined as state arg, it must return initial state
  switch (action.type) {
    case 'INCREMENT':
      return state + 1
    case 'DECREMENT':
      return state - 1
    default:
      return state
  }
}

export default counter
