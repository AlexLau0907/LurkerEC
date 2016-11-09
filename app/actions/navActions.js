import *  as ActionTypes from '../constants/ActionTypes'

export const addRootViews = (viewProducers) => {
  return {
    type: ActionTypes.ADD_ROOT_VIEWS,
    viewProducers
  }
}

export const addView = (viewProducer) => {
  return {
    type: ActionTypes.ADD_VIEW,
    viewProducer
  }
}

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

export const changeTab = (route) => {
  return {
    type: ActionTypes.CHANGE_TAB,
    route
  }
}

export const renderScene = (sceneProps) => {
  const key = sceneProps.scene.route.key
  if (!!key) {
    return this.pages[key];
  }
  return (<View style={{flex: 1, backgroudColor: '#efefef'}}><Text>.oOPs,error</Text></View>);
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

export const toggleLogin = () => {
  return {
    type: ActionTypes.TOGGLE_LOGIN
  }
}