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

  shouldComponentUpdate(nextProps) {
    const {index, routes} = nextProps.navigationState;
    return routes[index].key === "Cart"
      && this.props.navigationState.index === index;
  }

  render() {
    return (
      <View style={BaseStyles.container}>
        <Text>Cart Page</Text>
      </View>
    );
  }
}

export default Cart;
