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

  constructor(props) {
    super(props);
    const { getProductList } = props;
    getProductList('text');
  }

  shouldComponentUpdate(nextProps) {
    return this.props.productList.listDataSource !== nextProps.productList.listDataSource;
  }

  _renderRow = (rowData) => {
    console.log('row rendering')
    return (
      <TouchableOpacity onPress={() => alert('Product presseds')}>
        <View style={styles.row}>
          <AsyncImage style={styles.thumb} source={rowData.uri} />
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
    console.log('product list rendering')
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
    width: 180,
    height: 180,
  }
});

export default ProductsListView
