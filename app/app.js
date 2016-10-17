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
    this.state={current: 'home'}
  }

  _navigate = (title) => {
    this.setState({page: title});
  }

  _renderPage = () => {
    switch (this.state.page) {
      case 'home':
        return (<Home />);
        break;
      case 'cart':
        return (<Cart />);
        break;
      case 'personal':
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
