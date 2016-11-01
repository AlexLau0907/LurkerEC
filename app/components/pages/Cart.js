import React, { Component } from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  NavigationExperimental
} from 'react-native';

import BaseStyles from '../../constants/BaseStyles';

class Cart extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <View style={BaseStyles.container}>
        <Text>Cart Page</Text>
      </View>
    );
  }
}

export default Cart;
