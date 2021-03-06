import React, { Component } from 'react';
import {
  View,
  ListView,
  Image,
  Text,
  StyleSheet,
  TouchableOpacity,
  PixelRatio,
  Dimensions,
  ActivityIndicator
} from 'react-native'

const WindowSize = {width, height} = Dimensions.get('window');
const thumbWidth = WindowSize.width/2 - 13;

import AsyncImage from './AsyncImage'

class ProductsListView extends Component {

  constructor(props) {
    super(props);
    const { getProductList } = props;
    getProductList('text');
  }

  _renderRow = (rowData) => {
    const {uri, name, price, comments} = rowData;
    return (
      <TouchableOpacity onPress={() => alert(name)}>
        <View style={styles.row}>
          <AsyncImage style={styles.thumb} source={uri} ext='jpg' />
          <Text style={styles.name} numberOfLines={3}>{name}</Text>
          <View style={styles.infoRow}>
            <Text style={styles.price}>{price}</Text>
            <Text style={styles.comments}>{comments}</Text>
          </View>
        </View>
      </TouchableOpacity>
    )
  }

  _showIndicator = () => {
    return (<ActivityIndicator
      style={{
        backgroundColor: 'white',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
      }}
      size='large'
      color='gray' />)
  }

  _showProductList = () => {
    const {listDataSource} = this.props.productList;
    return (<ListView
      contentContainerStyle={styles.list}
      dataSource={listDataSource}
      renderRow={this._renderRow}
      initialListSize={21}
      pageSize={3} // should be a multiple of the no. of visible cells per row
      scrollRenderAheadDistance={500}
      />)
  }
  render() {
    const {isLoading} = this.props.productList;
    return isLoading ? this._showIndicator() : this._showProductList();
  }
}

const styles = StyleSheet.create({
  list: {
    justifyContent: 'space-around',
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'flex-start',
    margin: 0
  },
  row: {
    width: Dimensions.get('window').width / 2 - 4,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F6F6F6',
    borderColor: '#CCC',
    borderWidth: 1,
    borderRadius: 5,
    marginTop: 5,
  },
  thumb: {
    marginTop: 4,
    width: thumbWidth,
    height:  thumbWidth,
  },
  name: {
    height: 56,
    padding: 3
  },
  infoRow: {
    backgroundColor: '#efefef',
    paddingTop: 5,
    paddingBottom: 5,
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  price: {
    flex: 1,
    color: "red",
    fontSize: 18
  },
  comments: {
    flex: 1,
    textAlign: 'right',
    marginRight: 6,
    paddingTop: 5
  }
});

export default ProductsListView
