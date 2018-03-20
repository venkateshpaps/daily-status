import React from 'react';
import StarRatingComponent from 'react-star-rating-component';
function RatingWidget (props){
    return (
      <div>
        <StarRatingComponent
          name="starRate"
          editing={false}
          renderStarIcon={() => <span>&#9733;</span>}
          starCount={props.starCount}
          value={props.stars}
        />
      </div>
    )
}
export default RatingWidget;