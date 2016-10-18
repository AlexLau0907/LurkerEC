import {Component} from 'react';
import {
  ListView
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

const PRODUCTS_LIST = () => {
  THUMB_URLS.map((v,index) => ({
    "index": `Product ${index}`,
    "url": v
  }));
};



class ProductsListView extends Component {
    constructor(props) {
      super(props);
      const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 != r2});
      this.state = {
        dataSource: ds.cloneWithRows(PRODUCTS_LIST)
      };
    }

    _render=(rowData) => {
      <View> 
        <Image source={rowData.url}/>
        <Text>{rowData.index}</Text>
      </View>
    }

    render() {
      return(
        <ListView
          dataSource={this.state.dataSource}
          renderRow={this._renderRow} 
        />
      ); 
    }
}