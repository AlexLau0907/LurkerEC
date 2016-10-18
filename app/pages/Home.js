import React, { Component } from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  NavigationExperimental,
  PixelRatio
} from 'react-native';

import ProductsListView from './components/ProductsListView'

class Home extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <View>
        <ProductsListView />
        <Text>Home Page</Text>
      </View>
    );
  }
}

export default Home;
