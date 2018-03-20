import { GET_PRODUCT_RATING, DO_RATING_SUCCESS, DO_RATING_FAILURE } from '../ActionTypes/RatingActionTypes';
export function getProductRating(productId) {
    return {
        type: GET_PRODUCT_RATING,
        productId
    };
}
export function doRatingSuccess(rating) {
    return {
        type: DO_RATING_SUCCESS,
        rating
    };
}
export function doRatingFailure(error) {
    return {
        type: DO_RATING_FAILURE,
        error
    };
}
