import { USER_AUTH, TOGGLE_LOGIN } from '../constants/ActionTypes';

const initialState = {
  isAuth: false,
  user: '',
  loginVisible: false,
};

export default authState = (state = initialState, action) => {
  switch (action.type) {
    case USER_AUTH:
      if (action.payload.isAuth) {
        // const {payload} = action;
        return {
          ...state,
          ...action.payload,
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
