import * as ActionTypes from '../constants/ActionTypes';
import { NavigationExperimental } from 'react-native';
const {
  StateUtils: NavigationStateUtils
} = NavigationExperimental;


const initialState = {
  index: 0,
  views:{},
  routes: [{ 'key': 'Home' }]
};


export default navigationsState = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.CHANGE_TAB:
      if (NavigationStateUtils.has(state, action.tabName)) {
        return NavigationStateUtils.jumpTo(state, action.tabName);
      }
      return NavigationStateUtils.push(state, { key: action.tabName });
    case ActionTypes.PUSH_ROUTE:
      return NavigationStateUtils.push(state, action.key);
    case ActionTypes.POP_ROUTE:
      return NavigationStateUtils.pop(state, action.key);
    case ActionTypes.ADD_VIEW:
    nextSate = {
        ...state,
        views: {
          ...state.views,
          ...action.views
        }
      }
      console.log(nextSate);
      return nextSate;
    default:
      return state;
  }
}
