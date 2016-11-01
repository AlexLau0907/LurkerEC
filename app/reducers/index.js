import { combineReducers } from 'redux'
import navReducer from './navAppReducer'
import tabReducer from './tabReducer'

const rootReducer = combineReducers({
  navReducer,
  tabReducer
})

export default rootReducer;