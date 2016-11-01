import *  as ActionTypes from '../constants/ActionTypes'

export const push = (route) => {
  return {
    type: ActionTypes.PUSH_ROUTE,
    route
  }
}

export const pop = (route) => {
  return {
    type: ActionTypes.POP_ROUTE,
    route
  }
}

export const changeTab = (action) => {
  return {
    type: ActionTypes.CHANGE_TAB,
    action
  }
}