import { GET_PRODUCT_RATING, DO_RATING_SUCCESS } from '../ActionTypes/RatingActionTypes';
function RatingReducer(prevState = {
    products:[{id:"1",productName:"Television",price:"25000"},
              {id:"2",productName:"Mobile",price:"10000"},
              {id:"3",productName:"Laptop",price:"50000"},
              {id:"4",productName:"Smartwatch",price:"2000"},
              {id:"5",productName:"Hometheatre",price:"6000"}],
              productRating:0,
              loading:true
},action) {
    switch (action.type) {
        case GET_PRODUCT_RATING:
            return {
                ...prevState
            };
        case DO_RATING_SUCCESS:
            return {
                ...prevState,
                productRating:action.rating.rating,
                loading:false
            };
        default:
            return {
                ...prevState
            }
    }
}
export default RatingReducer;