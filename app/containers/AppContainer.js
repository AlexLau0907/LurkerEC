import { connect } from 'react-redux'

import { changeTab, toggleLogin, addViews, push, pop } from '../actions/navActions'
import AppNavigator from '../components/AppNavigator'

const mapStateProps = (state) => ({
  navigationState: state.appNavReducer,
})

export default AppContainer = connect(
  mapStateProps,
  {
    push: (route) => push(route),
    pop: (route) => pop(route),
    changeTab: (route) => changeTab(route),
    toggleLogin: () => toggleLogin(),
    addViews: (viewObjs) => addViews(viewObjs)
  }
)(AppNavigator);
