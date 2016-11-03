import { combineReducers } from 'redux'
import rootTabReducer from './rootTabReducer'
import authReducer from './authReducer'
import productListReducer from './productListReducer'

const rootReducer = combineReducers({
  rootTabReducer,
  authReducer,
  productListReducer
})

export default rootReducer;