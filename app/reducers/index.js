import { combineReducers } from 'redux'
import appNavReducer from './appNavReducer'
import authReducer from './authReducer'
import productListReducer from './productListReducer'

const rootReducer = combineReducers({
  appNavReducer,
  authReducer,
  productListReducer
})

export default rootReducer;