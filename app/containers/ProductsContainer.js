import { connect } from 'react-redux';
import { getProductList } from '../actions/productActions';
import ProductsListView from '../components/ProductsListView'

const mapStateToProps = (state, ownProps) => {
  return ({
  productList: state.productListReducer
})}

export default HomeContainer = connect(
  mapStateToProps,
  {
    getProductList: (params) => getProductList(params)
  }
)(ProductsListView)
