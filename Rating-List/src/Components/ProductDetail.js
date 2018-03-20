import React from 'react';
import RatingWidget from '../Widgets/RatingWidget';
import { Link } from 'react-router-dom';
import '../style.css';
function ProductDetail(props) {
  return (
    <div className="offset-sm-3 col-sm-6 productDetailBG">
      <h1>Product Detail</h1>
        <img src={require(`../../images/${props.match.params.productName}.jpg`)}
          alt={`${props.match.params.productName} is Loading...`}
          className="productImage"
        />
          <p>Id:{props.match.params.id}</p>
          <p>Name:{props.match.params.productName}</p>
          <p>Price:{props.match.params.price}</p>
            {props.loading?(<span className="ratingLoading">Rating is Loading...</span>):(
          <RatingWidget
            stars={props.rating}
            starCount={5}
          />
        ) 
      }
      <Link to="/" >
        <button className="backBtn">Back</button>
      </Link>
    </div>
  );
}
export default ProductDetail;