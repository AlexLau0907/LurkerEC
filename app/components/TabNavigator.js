import React, { Component } from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  NavigationExperimental
} from 'react-native';

import Home from '../components/pages/Home';
import Cart from '../components/pages/Cart';
import Personal from '../components/pages/Personal';
import Footer from '../components/Footer';

const {
  CardStack: NavigationCardStack,
  StateUtils: NavigationStateUtils,
} = NavigationExperimental;

class TabNavigator extends Component {
  constructor(props) {
    super(props);
  }

  _handleAction = (tab) => {
    const {changeTab} = this.props;
    changeTab(tab);
  }

  _renderScene = (sceneProps) => {
    switch (sceneProps.scene.route.key) {
      case 'Home':
        return (<Home {...this.props}/>);
      case 'Cart':
        return (<Cart />);
      case 'Personal':
        return (<Personal />);
      default:
        return (<Home />);
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <NavigationCardStack
          navigationState={this.props.navigationState}
          onNavigate={this._handleAction}
          renderScene={this._renderScene}>
        </NavigationCardStack>
        <Footer style={styles.footer} handleAction={this._handleAction} />
      </View>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1cadf7'
  },
  footer: {
    flexDirection: 'row',
    height: 60,
  }
});

export default TabNavigator;