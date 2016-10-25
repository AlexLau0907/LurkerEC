/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

import App from './app/app'

import AsyncImage from './app/components/AsyncImage'

export default class LurkerEC extends Component {
  render() {
    return (
      // <App />
      <View style={{flex:1}} >
      <AsyncImage 
      placeHolder={require('./app/Swiper/img/2.jpg')}
      source={{uri: 'http://www.uhubest.com/virgo-core/download/1462932906484.官网轮播图-2.png'}}
      style={{alignItems: 'center', width: 350, height: 150}}
      />
      </View>
    );
  }
}

AppRegistry.registerComponent('LurkerEC', () => LurkerEC);
