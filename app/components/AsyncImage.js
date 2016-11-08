import React, { Component, PropTypes } from 'react';
import {
  View,
  Image,
  ActivityIndicator,
  Platform
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
    this._isMounted = true;
  }

  componentWillUnmount() {
    this._isMounted = false;
    this._downloadTack.cancel((err) => console.log(err));
  }

  _fetch = (uri) => {
    this._downloadTack = RNFetchBlob.config({
      fileCache: true,
      appendExt: this.props.ext || 'png'
    }).fetch('GET', uri);
    this._downloadTack.then((res) => {
      const tempPath = Platform.OS === 'ios' ? res.path() : 'file://' + res.path();
      if (this._isMounted)
        this.setState({ source: { uri: tempPath } });
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
      !!this.props.placeHolder || this.state.source ?
        <Image source={this.state.source} style={this.props.style} />
        : <ActivityIndicator style={this.props.style} color='blue' />
    );
  }
}

export default AsyncImage;
