import { connect } from 'react-redux'

import {addRootViews, addView, changeTab, toggleLogin, push, pop } from '../actions/navActions'
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
    addView: (viewProducer) => addView(viewProducer),
    addRootViews: (viewProducers) => addRootViews(viewProducers)
  }
)(AppNavigator);
