import * as ActionTypes from '../constants/ActionTypes';
import { NavigationExperimental } from 'react-native';
const {
  StateUtils: NavigationStateUtils
} = NavigationExperimental;


const initialState = {
  index: 0,
  routes: [{ 'key': 'Home' }]
};


export default navigationsState = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.CHANGE_TAB:
      if (NavigationStateUtils.has(state, action.tab.key)) {
        return NavigationStateUtils.jumpTo(state, action.tab.key);
      }
      return NavigationStateUtils.push(state, { key: action.tab.key });
    default:
      return state;
  }
}
