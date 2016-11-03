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

  _renderScene = (sceneProps) => {
    switch (sceneProps.scene.route.key) {
      case 'Home':
        return (<Home {...this.props}/>);
      case 'Cart':
        return (<Cart {...this.props}/>);
      case 'Personal':
        return (<Personal {...this.props}/>);
      default:
        return (<Home />);
    }
  }

  render() {
    const {changeTab} = this.props;
    return (
      <View style={styles.container}>
        <NavigationCardStack
          navigationState={this.props.navigationState}
          onNavigate={changeTab}
          renderScene={this._renderScene}>
        </NavigationCardStack>
        <Footer style={styles.footer} handleAction={changeTab} />
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