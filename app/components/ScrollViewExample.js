/**
 * Copyright (c) 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * The examples provided by Facebook are for non-commercial testing and
 * evaluation purposes only.
 *
 * Facebook reserves all rights not expressly granted.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
 * OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NON INFRINGEMENT. IN NO EVENT SHALL
 * FACEBOOK BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN
 * AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
 * CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 *
 * @flow
 */
'use strict';

var React = require('react');
var ReactNative = require('react-native');
var {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  Dimensions
} = ReactNative;

const winWith = Dimensions.get('window').width;

export default class Carousel extends React.Component {
  constructor(props) {
    super(props);

    this.idx = -1;
  }
  render() {
    var _scrollView: ScrollView;
    return (
      <View>
        <ScrollView
          ref={(scrollView) => { this._scrollView = scrollView; }}
          automaticallyAdjustContentInsets={false}
          horizontal={true}
          style={[styles.scrollView, styles.horizontalScrollView]}>
          {THUMBS.map(createThumbRow)}
        </ScrollView>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {}}>
          <Text>Scroll to start</Text>
        </TouchableOpacity>
      </View>
    );
  }

  componentDidMount() {
    const timer = setInterval(() => {
      this.idx =  (this.idx + 1)%THUMBS.length;
      console.log(this.idx);
      this._scrollView.scrollTo({x: this.idx*winWith, animate: false})}
    , 3000);
  }
};

class Thumb extends React.Component {
  constructor(props) {
    super(props);
  }
  shouldComponentUpdate(nextProps, nextState) {
    return false;
  }

  render() {
    return (
      <View style={styles.imgFrame}>
        <Image style={styles.img} source={{uri:this.props.uri}} >
          <Text style={{color: 'black', alignItems: 'center', justifyContent: 'center', fontSize: 30, fontWeight: 'bold'}}> Hi </Text>
        </Image>
      </View>
    );
  }
}
var THUMBS = ['https://fbcdn-dragon-a.akamaihd.net/hphotos-ak-ash3/t39.1997/p128x128/851549_767334479959628_274486868_n.png', 'https://fbcdn-dragon-a.akamaihd.net/hphotos-ak-prn1/t39.1997/p128x128/851561_767334496626293_1958532586_n.png', 'https://fbcdn-dragon-a.akamaihd.net/hphotos-ak-ash3/t39.1997/p128x128/851579_767334503292959_179092627_n.png'];
// var THUMBS = ['https://fbcdn-dragon-a.akamaihd.net/hphotos-ak-ash3/t39.1997/p128x128/851549_767334479959628_274486868_n.png', 'https://fbcdn-dragon-a.akamaihd.net/hphotos-ak-prn1/t39.1997/p128x128/851561_767334496626293_1958532586_n.png', 'https://fbcdn-dragon-a.akamaihd.net/hphotos-ak-ash3/t39.1997/p128x128/851579_767334503292959_179092627_n.png', 'https://fbcdn-dragon-a.akamaihd.net/hphotos-ak-prn1/t39.1997/p128x128/851589_767334513292958_1747022277_n.png', 'https://fbcdn-dragon-a.akamaihd.net/hphotos-ak-prn1/t39.1997/p128x128/851563_767334559959620_1193692107_n.png', 'https://fbcdn-dragon-a.akamaihd.net/hphotos-ak-prn1/t39.1997/p128x128/851593_767334566626286_1953955109_n.png', 'https://fbcdn-dragon-a.akamaihd.net/hphotos-ak-prn1/t39.1997/p128x128/851591_767334523292957_797560749_n.png', 'https://fbcdn-dragon-a.akamaihd.net/hphotos-ak-prn1/t39.1997/p128x128/851567_767334529959623_843148472_n.png', 'https://fbcdn-dragon-a.akamaihd.net/hphotos-ak-prn1/t39.1997/p128x128/851548_767334489959627_794462220_n.png', 'https://fbcdn-dragon-a.akamaihd.net/hphotos-ak-prn1/t39.1997/p128x128/851575_767334539959622_441598241_n.png', 'https://fbcdn-dragon-a.akamaihd.net/hphotos-ak-ash3/t39.1997/p128x128/851573_767334549959621_534583464_n.png', 'https://fbcdn-dragon-a.akamaihd.net/hphotos-ak-prn1/t39.1997/p128x128/851583_767334573292952_1519550680_n.png'];
THUMBS = THUMBS.concat(THUMBS); // double length of THUMBS
var createThumbRow = (uri, i) => <Thumb key={i} uri={uri} />;

var styles = StyleSheet.create({
  scrollView: {
    backgroundColor: '#6A85B1',
    height: 300,
  },
  horizontalScrollView: {
    height: 120,
  },
  button: {
    margin: 7,
    padding: 5,
    alignItems: 'center',
    backgroundColor: '#eaeaea',
    borderRadius: 3,
  },
  buttonContents: {
    flexDirection: 'row',
    width: 64,
    height: 64,
  },
  imgFrame: {
    width: winWith,
    height: 120,
    padding: 2,
  },
  img: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#eaeaea',
  }
});
