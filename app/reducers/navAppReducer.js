import * as ActionTypes from '../constants/ActionTypes';
import { NavigationExperimental } from 'react-native';
const {
  StateUtils: NavigationStateUtils
} = NavigationExperimental;


const initialState = {
  index: 0,
  key: 'App',
  routes: [{ 'key': 'Home' }]
};


export default navigationsState = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.PUSH_ROUTE:
      if (NavigationStateUtils.has(state, action.route.key)) {
        return NavigationStateUtils.jumpTo(state, action.route.key);
      }
      return NavigationStateUtils.push(state, { key: action.route.key });
    case ActionTypes.POP_ROUTE:
      return state.index > 0 ? NavigationStateUtils.pop(state) : state;
    default:
      return state;
  }
}
