import React, { Component, PropTypes } from 'react';
import {
  View,
  Image
} from 'react-native';

import RNFetchBlob from 'react-native-fetch-blob';

class AsyncImage extends Component {
  static popTypes = {
    placeHolder: Image.propTypes.source,
    source: Image.propTypes.source,
    style: View.propTypes.style,
  };

  constructor(props) {
    super(props);
    this.state = {
      source: this.props.placeHolder,
    }
  };

  componentDidMount() {
    this._fetch(this.props.source.uri);
  }

  _fetch = (uri) => {
    RNFetchBlob.fetch('GET', uri)
      .then((res) => {
        // the conversion is done in native code
        let base64Str = res.base64();
        this.setState({ source: { uri: 'data:image/*;base64,' + base64Str } });
        return;
      })
      // Status code is not 200
      .catch((errorMessage, statusCode) => {
        // error handling
        console.log(errorMessage, statusCode);
      })
  }

  render() {
    return (
      <Image source={this.state.source} style={this.props.style} />
    );
  }
}

export default AsyncImage;
