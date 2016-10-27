import React, { Component } from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  NavigationExperimental
} from 'react-native';

const {
  CardStack: NavigationCardStack,
  StateUtils: NavigationStateUtils,
} = NavigationExperimental;

import Home from './pages/Home';
import Cart from './pages/Cart';
import Personal from './pages/Personal';
import Footer from './components/Footer';

const initialState = {
  index: 0,
  key: 'App',
  routes: [{ 'key': 'Home' }]
};

const NavigationReducer = (state = initialState, action) => {
  if(NavigationStateUtils.has(state, action.key)) {
    return NavigationStateUtils.jumpTo(state, action.key);
  }
  switch (action.type) {
    case 'push':
      return NavigationStateUtils.push(state, { key: action.key });
    case 'pop':
      return state.index > 0 ? NavigationStateUtils.pop(state) : state;
    default:
      return state;
  }
}

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      navigationState: NavigationReducer(initialState, {})
    }
  }

  _handleAction = (action) => {
    console.log(action);
    const nextState = NavigationReducer(this.state.navigationState, action);
    if(nextState === this.state.navigationState) {
      return false;
    }
    this.setState({
      navigationState: nextState
    });
    return true;
  }

  _renderScene = (sceneProps) => {
    console.log(sceneProps);
    switch (sceneProps.scene.route.key) {
      case 'Home':
        return (<Home />);
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
          navigationState={this.state.navigationState}
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
    backgroundColor: '#1cadf7',
  },
  footer: {
    flexDirection: 'row',
    height: 60,
  }
});
