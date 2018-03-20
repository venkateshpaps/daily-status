import React from 'react';
import { Link } from 'react-router-dom';
function ProductList(props) {
    return (
        <div className="row">
            {props.products.map(prods =>
                <div className="col-sm-3 productListBG"
                key={prods.id} >
                    <ul>
                        <li>Id: {prods.id}</li>
                        <li>Product: {prods.productName}</li>
                        <li>Price: {prods.price}</li>
                    </ul>
                    <Link to={`product-detail/${prods.id}/${prods.productName}/${prods.price}`}>
                        <button onClick={() => props.handleGetProductRatings(prods.id)}>Details</button>
                    </Link>
                </div>
            )}
        </div>
    )
}
export default ProductList;