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
  Header: NavigationHeader,
  StateUtils: NavigationStateUtils,
} = NavigationExperimental;

class TabNavigator extends Component {
  constructor(props) {
    super(props);
    this.props.addViews({
      "Home": (props) => <Home {...props} />,
      "Cart": (props) => <Cart {...props} />,
      "Personal": (props) => <Personal {...props} />
    })
  }

  _renderHeader = (sceneProps) => {
    return <NavigationHeader
      {...sceneProps}
      style={{ backgroundColor: "blue" }}
      renderTitleComponent={this._renderTitleComponent}
      onNavigateBack={this.props.pop}
      />
  }

  _renderLeftComponent = (sceneProps) => {
    return <View style={{ flex: 1 }}>
      <Text>left</Text>
    </View>
  }

  _renderTitleComponent = (props) => {
    return <NavigationHeader.Title>
      {"Header"}
    </NavigationHeader.Title>
  }

  _renderScene = (sceneProps) => {
    const {index, route} = sceneProps.scene;
    const {key} = route;
    const navIndex = sceneProps.navigationState.index;
    if (index === sceneProps.navigationState.index) {
      if (!!key) {
        const viewMaker = this.props.navigationState.views[key];
        return !viewMaker ? undefined : viewMaker(this.props);
      }
      return (<View style={styles.container}><Text>.oOPs,error</Text></View>);
    }
  }

  render() {
    const {changeTab, pop, navigationState} = this.props;
    const {routes, index} = navigationState;
    return (
      <View style={styles.container}>
        <NavigationCardStack
          key={'Stack_' + routes[index].key}
          // {onNavigateBack={pop}}
          navigationState={this.props.navigationState}
          renderHeader={this._renderHeader}
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