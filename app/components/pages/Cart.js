import React, { Component } from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  TouchableWithoutFeedback,
  NavigationExperimental
} from 'react-native';

import BaseStyles from '../../constants/BaseStyles';
import CarouselExample from '../CarouselExample';

class Cart extends Component {

  shouldComponentUpdate(nextProps) {
    const {index, routes} = nextProps.navigationState;
    return routes[index].key === "Cart"
      && this.props.navigationState.index === index;
  }

  _route = () => {
    const {addViews, push} = this.props;
    const viewName = "test" + Date.now();
    const test = (props) => <View style={{...BaseStyles.container, ...BaseStyles.center }}>
      <TouchableOpacity onPress={props.pop} >
        <Text> Go Back</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={this._route} >
        <Text> Go Ahead</Text>
      </TouchableOpacity>
      <Text>SubView {viewName}</Text>
    </View>
    const obj = {};
    obj[viewName] = test;
    const a = addViews(obj);
    push(viewName);
  }

  render() {
    return (
      <View style={{...BaseStyles.container, ...BaseStyles.center }}>
        <Text>Cart Page</Text>
        <TouchableOpacity onPress={this._route}>
          <Text>Next Page -></Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default Cart;
