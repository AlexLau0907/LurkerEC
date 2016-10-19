import React, { Component } from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  PixelRatio
} from 'react-native'

class Footer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={this.props.style || styles.footer}>
        <Tab title='Home' image={require('../images/首页.png')} navigate={this.props.navigate}/>
        <Tab title='Cart' image={require('../images/购物车.png')} navigate={this.props.navigate}/>
        <Tab title='Personal' image={require('../images/个人中心.png')} navigate={this.props.navigate}/>
      </View>
    );
  }
}

class Tab extends Component {
  constructor(props) {
    super(props);
  }

  _onPress = () => {
    this.props.navigate(this.props.title);
  }

  render() {
    return(
      <TouchableOpacity style={styles.tab} onPress={this._onPress}>
      <Image defaultSouce={require('../images/首页.png')} source={this.props.image} style={styles.tabImage}/>
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
