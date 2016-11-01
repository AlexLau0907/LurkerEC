import { connect } from 'react-redux'
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

import Home from '../components/Home';
import Cart from '../components/Cart';
import Personal from '../components/Personal';
import Footer from '../components/Footer';

import { push } from '../actions/navActions'

class TabNavigator extends Component {
  constructor(props) {
    super(props);
  }

  _handleAction = (action) => {
    const {push} = this.props;
    push(action);
  }

  _renderScene = (sceneProps) => {
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

const mapStateProps = (state) => {
  return {
    navigationState: state.navReducer,
  }
}

export default AppContainer = connect(
  mapStateProps,
  {
    push: (action) => push(action)
  }
)(TabNavigator);
