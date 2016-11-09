import React, { Component } from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  NavigationExperimental
} from 'react-native';

import BaseStyles from '../../constants/BaseStyles';

class Personal extends Component {

  render() {
    return(
      <View style={BaseStyles.container} >
        <Text>Personal Page</Text>
      </View>
    );
  }
}

export default Personal;
