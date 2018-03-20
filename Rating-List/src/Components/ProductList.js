import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as RatingActions from '../ActionCreators/RatingActions';
class ProductList extends Component {
    handleGetProductRatings = (productId) => {
        this.props.actions.getProductRating(productId)
    }
    render() {
        return (
            <div className="row">
                {this.props.products.map(prods =>
                    <div className="col-sm-3 productListBG"
                        key={prods.id} >
                        <ul>
                            <li>Id: {prods.id}</li>
                            <li>Product: {prods.productName}</li>
                            <li>Price: {prods.price}</li>
                        </ul>
                        <Link to={`product-detail/${prods.id}/${prods.productName}/${prods.price}`}>
                            <button onClick={() => this.handleGetProductRatings(prods.id)}>Details</button>
                        </Link>
                    </div>
                )}
            </div>
        )
    }
}
function mapStateToProps(state) {
    return {
        products: state.products
    };
}
function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(RatingActions, dispatch)
    };
}
export default (connect(mapStateToProps, mapDispatchToProps)(ProductList));