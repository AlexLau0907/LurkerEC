import React, { Component } from 'react';
import {
  Text,
  View,
  Image,
  Dimensions,
  TouchableWithoutFeedback,
} from 'react-native';
import Carousel from './Carousel';

import AsyncImage from './AsyncImage'

const { width, height } = Dimensions.get('window');

export default class CarouselExample extends Component {

  constructor(props) {
    super(props);

    this.state = {
      size: { width, height },
    };
  }

  _onLayoutDidChange = (e) => {
    const layout = e.nativeEvent.layout;
    this.setState({ size: { width: layout.width, height: layout.height } });
  }

  render() {
    return (
      <Carousel
        delay={2000}
        style={{ width: width, height: 145, marginTop: 4, marginBottom: 4 }}
        autoplay
        bullets
        currentPage={0}
        onAnimateNextPage={()=>{}}
        >
        <View style={[{ backgroundColor: '#BADA55' }, this.state.size]}>
          <TouchableWithoutFeedback onPress={() => alert('Touched')}>
            <Image source={{ uri: 'https://facebook.github.io/react/img/logo_og.png' }} style={{ width: width, height: 145 }} />
          </TouchableWithoutFeedback>
        </View>

        <TouchableWithoutFeedback onPress={() => alert('Touched')}>
          <View style={[{ backgroundColor: 'gray' }, this.state.size]}>
            <AsyncImage
              placeHolder={require('./images/2.jpg')}
              source={{ uri: encodeURI('http://www.uhubest.com/virgo-core/download/1462932906484.官网轮播图-2.png') }}
              style={{ width: width, height: 145 }} />
          </View>
        </TouchableWithoutFeedback>

        <View style={[{ backgroundColor: '#eee' }, this.state.size]}><Text>3</Text></View>
      </Carousel>
    );
  }
}
