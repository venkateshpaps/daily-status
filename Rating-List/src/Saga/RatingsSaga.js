import { put, takeLatest, call } from 'redux-saga/effects';
import { GET_PRODUCT_RATING } from '../ActionTypes/RatingActionTypes';
import { doRatingSuccess, doRatingFailure } from '../ActionCreators/RatingActions';
var URL = `http://172.16.99.134:3000/rating/`;
var jsonHeaders = { 'Accept': 'application/json', 'Content-Type': 'application/json' }
function* doGetRating(action) {
    let rating = yield fetch(`${URL}${action.productId}`, {
        method: 'GET',
        headers: jsonHeaders
    }
    ).then(ratingResult =>
        (
            (ratingResult.status ===200) ?
                (
                    ratingResult.json()
                ) : 
            (doRatingFailureAction)
        )
    )
    yield call(doRatingSuccessAction, rating);
}
function* doRatingSuccessAction(rating) {
    yield put(doRatingSuccess(rating));
}
function* doRatingFailureAction(error) {
    yield put(doRatingFailure(error));
}
function* doRatingApiCall(action) {
    try {
        yield call(doGetRating, action);
    }
    catch (error) {
        yield call(doRatingFailureAction, error);
    }
}
export function* RatingsSaga() {
    yield takeLatest(GET_PRODUCT_RATING, doRatingApiCall)
}
