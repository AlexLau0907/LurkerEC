import * as ActionTypes from '../constants/ActionTypes';
import { NavigationExperimental } from 'react-native';
const {
  StateUtils: NavigationStateUtils
} = NavigationExperimental;


const initialState = {
  viewProducers: {},
  rootViews: {
    index: 0,
    routes: [{ 'key': 'Home' }],
  },
};


export default navigationsState = (state = initialState, action) => {
  const rootViews = state.rootViews;
  const rootViewIndex = rootViews.index;
  const rootViewName = rootViews.routes[rootViewIndex].key;
  const navigationState = state[rootViewName];

  switch (action.type) {
    case ActionTypes.CHANGE_TAB: {
      const nextState = NavigationStateUtils.jumpTo(state.rootViews, action.route);
      if (state.rootViews !== nextState) {
        return {
        ...state,
          rootViews: {...nextState }
        };
      }
      break;
    }

    case ActionTypes.PUSH_ROUTE: {
      const nextState = NavigationStateUtils.push(navigationState, { key: action.route });
      console.log(rootViewName);
      if (navigationState !== nextState) {
        const tmp = {
        ...state,
          [rootViewName]: nextState
        }
        console.log(tmp)
        return tmp;
      }
      break;
    }
    
    case ActionTypes.POP_ROUTE: {
      const nextState = NavigationStateUtils.pop(navigationState);
      if (navigationState !== nextState) {
        return {
          ...state,
          [rootViewName]: nextState
        }
      }
      break;
    }

    case ActionTypes.ADD_ROOT_VIEWS: {
      const viewProducers = action.viewProducers;
      if (!viewProducers) return state;
      const viewNames = Object.keys(viewProducers);
      const rootRouteKeys = viewNames.map((name) => ({
        key: name
      }));
      const rootViews = {
        index: 0,
        routes: [...rootRouteKeys]
      };
      const subRoutes = {};
      for (let i = 0; i < viewNames.length; i++) {
        subRoutes[viewNames[i]] = {
          index: 0,
          routes: [{ key: viewNames[i] }]
        }
      }
      return {
        ...state,
        viewProducers: {...action.viewProducers },
        rootViews: {...rootViews },
        ...subRoutes
      };
    }

    case ActionTypes.ADD_VIEW: {
      return !!state.viewProducers[Object.keys(action.viewProducer)] ? state :
        {
        ...state,
          viewProducers: {
          ...state.viewProducers,
          ...action.viewProducer
          }
        };
    }
    default:
      break;
  }
  return state;
}
