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

import ProductsListView from '../components/ProductsListView';
import BaseStyles from '../infrastructures/BaseStyles';
import Login from './Login';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {loginVisible: false}
  }

  _toggleLoginVisible = () => {
    this.setState({loginVisible: this.state.loginVisible ? false : true});
  }

  render() {
    return(
      <View style={{flex:1}}>
        <Login styel={{flex:1}} visible={this.state.loginVisible} toggleLoginVisible = {this._toggleLoginVisible}>
        </Login>
        <View style={styles.header}>
          <TouchableOpacity style={styles.headerLogin} onPress={this._toggleLoginVisible}>
            <Text style={[BaseStyles.text]}>Login</Text>
          </TouchableOpacity>
          <View  style={styles.headerTitle}>
            <Text style={[styles.headerText, BaseStyles.text]}>Header</Text>
          </View>
        </View>
        <ProductsListView style={styles.productslist}/>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  header: {
    height:(Platform.OS === 'ios') ? 50: 40,
    paddingTop: (Platform.OS === 'ios') ? 20: 8,
    paddingBottom: 8,
    borderWidth: 1/PixelRatio.get(),
    borderColor: 'gray',
    flexDirection: 'row'
  },
  headerLogin:{
    width:50,
    height:40,
    marginLeft: 8,
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: 12,
  },
  headerTitle: {
    flex:1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingRight: 58
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  productslist: {
    flex: 1
  }
});
export default Home;
