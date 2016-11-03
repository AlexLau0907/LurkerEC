import { connect } from 'react-redux'
import { changeTab, toggleLogin } from '../actions/navActions'
import {navigationState} from '../reducers/rootTabReducer'
import TabNavigator from '../components/TabNavigator'

const mapStateProps = (state) => ({
  navigationState: state.rootTabReducer,
})

export default AppContainer = connect(
  mapStateProps,
  {
    changeTab: (tab) => changeTab(tab),
    toggleLogin: () => toggleLogin()
  }
)(TabNavigator);
