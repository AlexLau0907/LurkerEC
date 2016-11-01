import { combineReducers } from 'redux'
import rootTabReducer from './rootTabReducer'
import authReducer from './authReducer'

const rootReducer = combineReducers({
  rootTabReducer,
  authReducer
})

export default rootReducer;