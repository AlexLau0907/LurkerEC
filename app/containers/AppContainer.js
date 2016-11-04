import { connect } from 'react-redux'

import { changeTab, toggleLogin, addViews } from '../actions/navActions'
import { navigationState } from '../reducers/rootTabReducer'
import TabNavigator from '../components/AppNavigator'

const mapStateProps = (state) => ({
  navigationState: state.rootTabReducer,
})

export default AppContainer = connect(
  mapStateProps,
  {
    changeTab: (tabName) => changeTab(tabName),
    toggleLogin: () => toggleLogin(),
    addViews: (obj) => addViews(obj)
  }
)(TabNavigator);
