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

export const changeTab = (tab) => {
  return {
    type: ActionTypes.CHANGE_TAB,
    tab
  }
}

export const getAuth = (userName) => {
  return (dispatch, getState) => {
      //TODO: just for simulate the ansync
      setTimeout(() => {
        dispatch({
          type: ActionTypes.USER_AUTH,
          payload: {
            isAuth: true,
            user: 'alex'
          }
        })
      }, 2000)
    }
}