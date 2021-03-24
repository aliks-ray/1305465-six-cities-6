import React from "react";
import PropTypes from "prop-types";
import Review from "../review/review.jsx";
import {reviewType} from "../../../prop-types/prop-types.js";

const ReviewsList = ({reviews}) => (
  <ul className="reviews__list">
    {reviews.map((review) => {
      return <Review key={review.id} review={review} />;
    })}
  </ul>
);

ReviewsList.propTypes = {
  reviews: PropTypes.arrayOf(reviewType).isRequired
};

export default ReviewsList;
