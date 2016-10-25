import React, { Component, PropTypes } from 'react';
import {
  View,
  Image
} from 'react-native'


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
    fetch(uri)
      .then((res) => res.blob())
      .catch((err) => {
        console.log(err);
      })
      .then((imgBlob) => {
        const objectURL = URL.createObjectURL(imgBlob);
        const reader = new window.FileReader();
        reader.readAsDataURL(imgBlob);
        reader.onloadend = () => {
          base64data = reader.result;
          this.setState({ source: { uri: base64data } });
        };
      }).done();
  }

  render() {
    return (
      <Image source={this.state.source} style={this.props.style} />
    );
  }
}

export default AsyncImage;