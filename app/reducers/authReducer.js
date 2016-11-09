import { USER_AUTH, TOGGLE_LOGIN } from '../constants/ActionTypes';

const initialState = {
  isAuth: false,
  user: '',
  loginVisible: false,
};

export default authInfo = (state = initialState, action) => {
  switch (action.type) {
    case USER_AUTH:
      if (action.authInfo.isAuth) {
        // const {payload} = action;
        return {
          ...state,
          ...action.authInfo,
        };
      }
      break;
    case TOGGLE_LOGIN:
      return {
        ...state,
        loginVisible: !state.loginVisible,
        };
    default:
      return state;
  }
};
