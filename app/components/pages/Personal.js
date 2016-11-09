import React, { Component } from 'react';
import {
  View,
  Text,
  Image,
  Button,
  TouchableOpacity,
  NavigationExperimental
} from 'react-native';

import BaseStyles from '../../constants/BaseStyles';

class Personal extends Component {
  
  _onButtonPress = (e) => console.log(e)

  render() {
    return(
      <View style={BaseStyles.container, {alignItems: 'center', justifyContent: 'center'}} >
        <Text>Personal Page</Text>
        <Button title="textButton" onPress={this._onButtonPress} />
      </View>
    );
  }
}

export default Personal;
