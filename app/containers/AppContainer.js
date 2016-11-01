import { connect } from 'react-redux'
import { changeTab } from '../actions/navActions'
import TabNavigator from '../components/TabNavigator'

const mapStateProps = (state) => {
  return {
    navigationState: state.rootTabReducer,
  }
}

export default AppContainer = connect(
  mapStateProps,
  {
    changeTab: (tab) => changeTab(tab)
  }
)(TabNavigator);
