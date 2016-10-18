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
      <View style={styles.home}>
        <TouchableOpacity style={styles.header}><Text>Header</Text></TouchableOpacity>
        <ProductsListView style={styles.productslist}/>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  home: {
    flex:1,
    margin: 0,
    paddingTop: 20,
  },
  header: {
    height:40,
    borderWidth: 1/PixelRatio.get(),
    borderColor: 'gray',
    alignItems: 'center',
    justifyContent: 'center',
    margin:0
  },
  productslist: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'flex-start'
  }
});
export default Home;
