import * as ActionTypes from '../constants/ActionTypes';
import { NavigationExperimental } from 'react-native';
const {
  StateUtils: NavigationStateUtils
} = NavigationExperimental;


const initialState = {
  index: 0,
  views: {},
  routes: [{ 'key': 'Home' }],
};


export default navigationsState = (state = initialState, action) => {
  if (NavigationStateUtils.has(state, action.route)) {
    return NavigationStateUtils.jumpTo(state, action.route);
  }
  switch (action.type) {
    case ActionTypes.CHANGE_TAB:
    case ActionTypes.PUSH_ROUTE:
      return NavigationStateUtils.push(state, { key: action.route });
    case ActionTypes.POP_ROUTE:
      return NavigationStateUtils.pop(state);
    case ActionTypes.ADD_VIEW:
      return nextSate = {
        ...state,
        views: {
          ...state.views,
          ...action.views
        }
      };
    default:
      return state;
  }
}
