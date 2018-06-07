import { combineReducers } from 'redux'
import like from './like/reducer'

const reducers = combineReducers({
  like,
})

export default reducers
