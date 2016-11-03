import * as ActionTypes from '../constants/ActionTypes'
import { ListView } from 'react-native'

const THUMB_URLS = [
  require('../components/Thumbnails/like.png'),
  require('../components/Thumbnails/dislike.png'),
  require('../components/Thumbnails/call.png'),
  require('../components/Thumbnails/fist.png'),
  require('../components/Thumbnails/bandaged.png'),
  require('../components/Thumbnails/flowers.png'),
  require('../components/Thumbnails/heart.png'),
  require('../components/Thumbnails/liking.png'),
  require('../components/Thumbnails/party.png'),
  require('../components/Thumbnails/poke.png'),
  require('../components/Thumbnails/superlike.png'),
  require('../components/Thumbnails/victory.png'),
  require('../components/Thumbnails/like.png'),
  require('../components/Thumbnails/dislike.png'),
  require('../components/Thumbnails/call.png'),
  require('../components/Thumbnails/fist.png'),
  require('../components/Thumbnails/bandaged.png'),
  require('../components/Thumbnails/flowers.png'),
  require('../components/Thumbnails/heart.png'),
  require('../components/Thumbnails/liking.png'),
  require('../components/Thumbnails/party.png'),
  require('../components/Thumbnails/poke.png'),
  require('../components/Thumbnails/superlike.png'),
  require('../components/Thumbnails/victory.png'),
];

// const THUMB_URLS = ['alex', 'kiki'];

const PRODUCTS_LIST = (() => THUMB_URLS.map((source, index, v) => ({
  "index": `Product ${index}`,
  "uri": { uri: 'http://www.uhubest.com/virgo-core/download/1476262352583.%E4%B8%BB%E5%9B%BE.jpg?w=270' }
})))();

let ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 != r2 });
ds = ds.cloneWithRows(PRODUCTS_LIST);
console.log(ds)

export const getProductList = (params) => {
  return (dispatch, getState) => {

    setTimeout(() => dispatch(
      {
        type: ActionTypes.GET_PRODUCT_LIST,
        listDataSource: ds
      }
    ), 10000);
  }
}

export const getProductDetails = (params) => {
  return {
    teype: ActionTypes.GET_PRODUCT_DETAILS,
    params
  }
}