import React, { Component } from 'react';
import {
  View,
  Text,
  Modal,
  Image,
  TouchableOpacity,
  PixealRatio,
  StyleSheet
} from 'react-native'

import BaseStyles from '../../constants/BaseStyles';

class Login extends Component {
  constructor(props) {
    super(props);
  }

  shouldComponentUpdate(nextProps, nextState) {
    //to prevet login view re-render
    return this.props.authState.loginVisible || nextProps.authState.loginVisible;
  }

  _toggleLogin = () => {
    const { toggleLogin } = this.props;
    toggleLogin();
  }

  _getAuth = (user) => {
    const {getAuth} = this.props
    getAuth();
  }

  render() {
    const {isAuth, user, loginVisible} = this.props.authState;
    return (
      <Modal
        animationType={"slide"}
        transparent={true}
        visible={loginVisible}
        onRequestClose={() => { } }
        >
        <TouchableOpacity style={styles.container} onPress={this._toggleLogin}>
          <View style={styles.loginFrame}>
            <View style={styles.title}>
              <Text style={[BaseStyles.text]}>
                Welcome {isAuth ? user : ' To Lurker'}
              </Text>
            </View>
            <Image style={styles.image} source={require('../images/cheer.png')} />
            <View style={styles.loginOperation}>
              <TouchableOpacity style={styles.loginBtn} onPress={this._getAuth}><Text style={[BaseStyles.text]}>登陆</Text></TouchableOpacity>
            </View>
          </View>
        </TouchableOpacity>
      </Modal>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(3, 3, 3, 0.8)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  loginFrame: {
    backgroundColor: '#FFF',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#F6F6F6',
  },
  title: {
    flex: 1,
    height: 40,
    backgroundColor: '#1cadf7',
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    alignItems: 'center',
    justifyContent: 'center'
  },
  image: {
    width: 200,
    height: 200
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
