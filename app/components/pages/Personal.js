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
import SampleChart from '../SampleChart'

class Personal extends Component {
  constructor(props) {
    super(props)
    this.state = {
      showData: false
    }
  }
  _onButtonPress = () => {
    this.setState({showData: !this.state.showData})
  }

  render() {
    return (
      <View style={BaseStyles.container, {justifyContent: 'center', alignItems:'center', marginTop: 64}} >
        <Text>Personal Data</Text>
        <Button title="ShowData" onPress={this._onButtonPress} />
        {this.state.showData ? <SampleChart /> :null}
      </View >
    );
  }
}

export default Personal
