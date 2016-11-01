import { connect } from 'react-redux'
import { getAuth } from '../actions/navActions'
import Login from '../components/pages/Login'

const mapStateProps = (state) => {
  return {
    authState: state.authReducer,
  }
}

export default LoginContainer = connect(
  mapStateProps,
  {
    getAuth: (user) => getAuth(user)
  }
)(Login);