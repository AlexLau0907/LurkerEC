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

import AsyncImage from './AsyncImage'

class ProductsListView extends Component {

  componentDidMount() {
    const { getProductList } = this.props;
    getProductList('text');
  }
  _renderRow = (rowData) => {
    return (
      <TouchableOpacity onPress={() => alert('Product presseds')}>
        <View style={styles.row}>
          <AsyncImage style={styles.thumb} placeHolder={require('./Thumbnails/heart.png')} source={rowData.uri} />
          <Text>{rowData.index}</Text>
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
    console.log(listDataSource)
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
    width: 64,
    height: 64
  }
});

export default ProductsListView
