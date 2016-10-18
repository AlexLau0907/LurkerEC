import React, { Component } from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  NavigationExperimental
} from 'react-native';

import Home from './pages/Home';
import Cart from './pages/Cart';
import Personal from './pages/Personal';
import Footer from './components/Footer';

export default class App extends Component {
  constructor(props){
    super(props);
    this.state={currentPage: 'Home'}
  }
  _navigate = (title) => {
    this.setState({currentPage: title});
  }

  _renderPage = () => {
    switch (this.state.currentPage) {
      case 'Home':
        return (<Home />);
        break;
      case 'Cart':
        return (<Cart />);
        break;
      case 'Personal':
        return (<Personal />);
        break;
      default:
        return (<Home />)
        break
    }
  }

  render() {
    return(
      <View style={styles.container}>
        <View style={styles.container}>
        {this._renderPage()}
        </View>
        <Footer style={styles.footer} navigate={this._navigate}/>
      </View>
    );
  }

};

const styles=StyleSheet.create({
  container: {
    flex:1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  footer: {
    flexDirection: 'row',
    height: 60,
  }
});
