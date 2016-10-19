import React, {Component} from 'react';
import {
  View,
  Text,
  Modal,
  Image,
  TouchableOpacity,
  PixealRatio,
  StyleSheet
} from 'react-native'

import BaseStyles from '../infrastructures/BaseStyles';

class Login extends Component {
  constructor(props) {
    super(props);
  }

  _login = () => {
    this.props.toggleLoginVisible();
  } 
  
  render() {
    return (
      <Modal
        animationType ={"slide"}
        transparent={false}
        visible={this.props.visible}
        onRequestClose={() => {}}
      >
        <TouchableOpacity style={styles.container} onPress={this.props.toggleLoginVisible}>
          <View style={styles.loginFrame}>
            <View style={styles.title}><Text style={[BaseStyles.text]}>Welcome To Lurker</Text></View>
            <Image style={styles.image} source={require('../images/cheer.png')} />
            <View style={styles.loginOperation}>
              <TouchableOpacity style={styles.loginBtn} onPress={this._login}><Text style={[BaseStyles.text]}>登陆</Text></TouchableOpacity>
            </View>
          </View> 
        </TouchableOpacity>
      </Modal>);
  }
}


const styles = StyleSheet.create({
  container: {
    flex:1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  loginFrame: {
    borderRadius: 5,
    borderWidth: 2,
    borderColor: '#F6F6F6',
  },
  title: {
    flex:1,
    height: 40,
    backgroundColor: '#1cadf7',
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    alignItems: 'center',
    justifyContent: 'center'
  },
  image: {
    width: 200,
    height:200
  },
  loginBtn: {
    height: 40,
    backgroundColor: '#1cadf7',
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5,
  }
});

export default Login