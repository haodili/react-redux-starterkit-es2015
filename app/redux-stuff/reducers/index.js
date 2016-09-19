import { combineReducers } from 'redux'
import counter from './home'
import about from './about'

export default combineReducers({
  counter,
  about
})
