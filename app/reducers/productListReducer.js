import { GET_PRODUCT_LIST } from '../constants/ActionTypes';

const initialState = {
  isLoading: true,
  listDataSource: [],
}

export default productList = (state = initialState, action) => {
  switch (action.type) {
    case GET_PRODUCT_LIST:
      return {
      ...state,
        listDataSource: action.listDataSource,
        isLoading: false
      }
    default:
      return state;
  }
}