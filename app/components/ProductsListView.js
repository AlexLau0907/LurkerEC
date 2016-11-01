import React, {Component} from 'react';
import {
  View,
  ListView,
  Image,
  Text,
  StyleSheet,
  TouchableOpacity,
  PixelRatio,
  Dimensions
} from 'react-native'

import AsyncImage from '../../components/AsyncImage'

const THUMB_URLS = [
  require('./Thumbnails/like.png'),
  require('./Thumbnails/dislike.png'),
  require('./Thumbnails/call.png'),
  require('./Thumbnails/fist.png'),
  require('./Thumbnails/bandaged.png'),
  require('./Thumbnails/flowers.png'),
  require('./Thumbnails/heart.png'),
  require('./Thumbnails/liking.png'),
  require('./Thumbnails/party.png'),
  require('./Thumbnails/poke.png'),
  require('./Thumbnails/superlike.png'),
  require('./Thumbnails/victory.png'),
  require('./Thumbnails/like.png'),
  require('./Thumbnails/dislike.png'),
  require('./Thumbnails/call.png'),
  require('./Thumbnails/fist.png'),
  require('./Thumbnails/bandaged.png'),
  require('./Thumbnails/flowers.png'),
  require('./Thumbnails/heart.png'),
  require('./Thumbnails/liking.png'),
  require('./Thumbnails/party.png'),
  require('./Thumbnails/poke.png'),
  require('./Thumbnails/superlike.png'),
  require('./Thumbnails/victory.png'),
];

// const THUMB_URLS = ['alex', 'kiki'];

const PRODUCTS_LIST = (() => THUMB_URLS.map((source,index, v) => ({
    "index": `Product ${index}`,
    "uri": {uri: 'http://www.uhubest.com/virgo-core/download/1476262352583.%E4%B8%BB%E5%9B%BE.jpg?w=270'}
  })))();



class ProductsListView extends Component {
    constructor(props) {
      super(props);
      const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 != r2});
      this.state = {
        dataSource: ds.cloneWithRows(PRODUCTS_LIST)
      };
    }

    _renderRow=(rowData) => {
      return (
        <TouchableOpacity onPress={() => alert('Product presseds')}>
          <View style={styles.row}>
            <AsyncImage style={styles.thumb} placeHolder={require('./Thumbnails/heart.png')} source={rowData.uri}/>
            <Text>{rowData.index}</Text>
          </View>
        </TouchableOpacity>
      )
    }

    render() {
      return(
        <ListView
          contentContainerStyle={styles.list}
          dataSource={this.state.dataSource}
          renderRow={this._renderRow}
          initialListSize={21}
          pageSize={3} // should be a multiple of the no. of visible cells per row
          scrollRenderAheadDistance={500}
        />
      );
    }
}

const styles=StyleSheet.create({
  list: {
    justifyContent: 'space-around',
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'flex-start',
    margin:0
  },
  row: {
    width: Dimensions.get('window').width/2-4,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F6F6F6',
    borderColor: '#CCC',
    borderWidth: 1,
    borderRadius: 5,
    marginTop: 5,
  },
  thumb: {
    width: 64,
    height: 64
  }
});

export default ProductsListView
