import * as ActionTypes from '../constants/ActionTypes'
import { ListView } from 'react-native'
import DemoData from '../constants/test/DemoData'

// const THUMB_URLS = ['alex', 'kiki'];

const PRODUCTS_LIST = (() => DemoData.data.map((source, index, v) => ({
  "name": `Product ${source.name}`,
  "price": `¥ ${source.price}.00`,
  "comments": `评价：${source.comments}`,
  "uri": { uri: encodeURI('http://www.uhubest.com/virgo-core/download/'+ source.image + '?w=270') }
})))();

let ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 != r2 });
ds = ds.cloneWithRows(PRODUCTS_LIST);

export const getProductList = (params) => {
  return (dispatch, getState) => {

    setTimeout(() => dispatch(
      {
        type: ActionTypes.GET_PRODUCT_LIST,
        listDataSource: ds
      }
    ), 100);
  }
}

export const getProductDetails = (params) => {
  return {
    teype: ActionTypes.GET_PRODUCT_DETAILS,
    params
  }
}