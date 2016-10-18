import React, { Component } from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  NavigationExperimental,
  PixelRatio,
  StyleSheet
} from 'react-native';

import ProductsListView from '../components/ProductsListView'

class Home extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <View style={{flex:1}}>
        <TouchableOpacity style={styles.header}><Text>Header</Text></TouchableOpacity>
        <ProductsListView style={styles.productslist}/>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  header: {
    height:40,
    borderWidth: 1/PixelRatio.get(),
    borderColor: 'gray',
    alignItems: 'center',
    justifyContent: 'center',
  },
  productslist: {
    flex: 1,
    height: 500,
  }
});
export default Home;
