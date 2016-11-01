import React, { Component } from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  PixelRatio
} from 'react-native'

import { PUSH_ROUTE } from '../constants/ActionTypes';

import BaseStyles from '../constants/BaseStyles';

class Footer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={this.props.style || styles.footer}>
        <Tab title='Home' image={require('./images/首页.png')} handleAction={this.props.handleAction}/>
        <Tab title='Cart' image={require('./images/购物车.png')} handleAction={this.props.handleAction}/>
        <Tab title='Personal' image={require('./images/个人中心.png')} handleAction={this.props.handleAction}/>
      </View>
    );
  }
}

class Tab extends Component {
  constructor(props) {
    super(props);
  }

  _onPress = () => {
    this.props.handleAction({type: PUSH_ROUTE, key: this.props.title});
  }

  render() {
    return(
      <TouchableOpacity style={styles.tab} onPress={this._onPress}>
      <Image defaultSouce={require('./images/首页.png')} source={this.props.image} style={styles.tabImage}/>
      <Text style={[BaseStyles.text]}>{this.props.title}</Text>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  footer: {
    height: 60,
    flexDirection: 'row',
    borderWidth: 1/PixelRatio.get(),
    borderColor: 'blue',
    alignItems: 'center',
    justifyContent: 'center'
  },
  tab: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  tabImage: {
    width: 30,
    height: 30
  }
});


export default Footer;
