import { connect } from 'react-redux'
import TabsRoot from '../components/TabRoot'
import { changeTab } from '../actions/navActions'

const mapStateToProps = (state) => {
  return {
    tabs: state.tabReducer
  }
}

export default connect(
  mapStateToProps,
  {
    changeTab: (route) => changeTab(route)
  }
)(TabsRoot)
