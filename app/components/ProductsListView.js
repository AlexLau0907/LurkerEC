import React, {Component} from 'react';
import {
  View,
  ListView,
  Image,
  Text,
  StyleSheet
} from 'react-native'

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
];

// const THUMB_URLS = ['alex', 'kiki'];

const PRODUCTS_LIST = (() => THUMB_URLS.map((source,index, v) => ({
    "index": `Product ${index}`,
    "url": source
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
        <View style={styles.row}>
          <Image style={styles.thumb}source={rowData.url}/>
          <Text>{rowData.index}</Text>
        </View>
      )
    }

    render() {
      return(
        <ListView
          contentContainerStyle={styles.list}
          dataSource={this.state.dataSource}
          renderRow={this._renderRow}
        />
      );
    }
}

const styles=StyleSheet.create({
  list: {
    justifyContent: 'space-around',
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'flex-start'
  },
  row: {
    width: 100,
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F6F6F6',
    borderColor: '#CCC',
    borderWidth: 1,
    borderRadius: 5,
    margin: 3,
  },
  thumb: {
    width: 64,
    height: 64
  }
});

export default ProductsListView
