import React, { Component } from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  NavigationExperimental,
  PixelRatio,
  StyleSheet,
  Platform
} from 'react-native';

import ProductsListView from '../components/ProductsListView'

class Home extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <View style={{flex:1}}>
        <TouchableOpacity style={styles.header}>
          <Text style={styles.headerText}>Header</Text>
        </TouchableOpacity>
        <ProductsListView style={styles.productslist}/>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  header: {
    height:40,
    paddingTop: (Platform.OS === 'ios') ? 20: 0,
    paddingBottom: 8,
    borderWidth: 1/PixelRatio.get(),
    borderColor: 'gray',
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold'
  },
  productslist: {
    flex: 1
  }
});
export default Home;
