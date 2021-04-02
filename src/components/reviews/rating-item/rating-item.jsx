import React from "react";
import PropTypes from "prop-types";

const RatingItem = ({count, handleRatingChange}) => (
  <React.Fragment>
    <input
      className="form__rating-input visually-hidden"
      name="rating"
      defaultValue={count}
      id={`${count}-stars`}
      type="radio"
      onChange={handleRatingChange}
    />
    <label
      htmlFor={`${count}-stars`}
      className="reviews__rating-label form__rating-label"
      title="good"
    >
      <svg className="form__star-image" width={37} height={33}>
        <use xlinkHref="#icon-star" />
      </svg>
    </label>
  </React.Fragment>
);

RatingItem.propTypes = {
  count: PropTypes.number.isRequired,
  handleRatingChange: PropTypes.func.isRequired
};

export default RatingItem;
