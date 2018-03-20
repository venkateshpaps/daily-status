import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, Switch, withRouter } from 'react-router-dom';
import ProductList from './Components/ProductList';
import ProductDetail from './Components/ProductDetail';
class App extends Component {
  constructor(props) {
    super()
  }
  render() {
    return (
      <div >
        <Switch>
          <Route
            exact path="/" 
            component={ProductList} 
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
    rating: state.productRating,
    loading: state.loading
  };
}
export default withRouter(connect(mapStateToProps)(App));
