import React, { Component } from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  NavigationExperimental
} from 'react-native';

import BaseStyles from '../infrastructures/BaseStyles';

class Personal extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <View style={BaseStyles.container} >
        <Text>Personal Page</Text>
      </View>
    );
  }
}

export default Personal;
