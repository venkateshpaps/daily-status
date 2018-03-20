import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Route, Switch, withRouter } from 'react-router-dom';
import * as RatingActions from './ActionCreators/RatingActions';
import ProductList from './Components/ProductList';
import ProductDetail from './Components/ProductDetail';
class App extends Component {
  constructor(props) {
    super()
  }
  handleGetProductRatings = (productId) => {
    this.props.actions.getProductRating(productId)
  }
  render() {
    return (
      <div >
        <Switch>
          <Route
            exact path="/" 
            render={props =>
              <ProductList
                {...props}
                products={this.props.products}
                handleGetProductRatings={this.handleGetProductRatings}
              />
            }
          />
          <Route
            path="/product-detail/:id/:productName/:price"
            render={props =>
              <ProductDetail {...props}
                rating={this.props.rating}
                loading={this.props.loading}
              />
            }
          />
        </Switch>
      </div>
    )
  }
}
function mapStateToProps(state) {
  return {
    products: state.products,
    rating: state.productRating,
    loading: state.loading
  };
}
function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(RatingActions, dispatch)
  };
}
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
