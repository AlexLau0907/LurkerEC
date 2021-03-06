import { connect } from 'react-redux'
import { getAuth, toggleLogin } from '../actions/navActions'
import Login from '../components/pages/Login'

const mapStateProps = (state) => ({
  authState: state.authReducer,
})

export default LoginContainer = connect(
  mapStateProps,
  {
    getAuth: (user) => getAuth(user),
    toggleLogin: () => toggleLogin()
  }
)(Login);