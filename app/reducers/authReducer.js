import { USER_AUTH } from '../constants/ActionTypes';

const initialState = {
  isAuth: false,
  user: ''
}

export default authState = (state = initialState, action) => {
  switch (action.type) {
    case USER_AUTH:
      if (action.payload.isAuth) {
        const {payload} = action;
        return {
          ...state,
          ...payload
        };
      }
    default:
      return state;
  }
}