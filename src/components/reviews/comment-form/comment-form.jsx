import React, {useState, useRef} from "react";
import {useDispatch, useSelector} from "react-redux";
import {addNewReviews} from "../../../store/api-actions.js";
import {MAX_RATING, ReviewSettings} from "../../../consts/consts.js";
import RatingItem from "../rating-item/rating-item.jsx";

const CommentForm = () => {
  const dispatch = useDispatch();
  const {offer} = useSelector((state) => state.DATA_LOAD);

  const error = useRef();

  const [userForm, setUserForm] = useState({
    rating: null,
    comment: ``
  });

  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (evt) => {
    evt.preventDefault();
    setIsLoading(true);
    dispatch(
        addNewReviews(offer.id, {
          rating: userForm.rating,
          comment: userForm.comment
        })
    )
      .then(() => {
        setIsLoading(false);
        handleReset();
      })
      .catch(() => {
        setIsLoading(false);
        error.current.style.display = `block`;
      });
  };

  const handleReset = () => {
    document.getElementById(`userReviewForm`).reset();
    setUserForm({
      rating: null,
      comment: ``
    });
  };

  const handleFieldChange = (evt) => {
    const {name, value} = evt.target;
    setUserForm({...userForm, [name]: value});
  };

  return (
    <React.Fragment>
      <form
        onSubmit={(evt) => handleSubmit(evt)}
        className="reviews__form form"
        action="#"
        method="post"
        id="userReviewForm"
      >
        <div
          style={{
            display: `none`,
            color: `red`
          }}
          ref={error}
        >
          Sorry! Something went wrong! Please try again later :(
        </div>
        <label className="reviews__label form__label" htmlFor="review">
          Your review
        </label>
        <div className="reviews__rating-form form__rating">
          {Array.from(new Array(MAX_RATING)).map((field, index) => (
            <RatingItem
              key={index}
              value={index}
              name="rating"
              count={MAX_RATING - index}
              handleFieldChange={handleFieldChange}
            />
          ))}
        </div>
        <textarea
          className="reviews__textarea form__textarea"
          id="comment"
          name="comment"
          placeholder="Tell how was your stay, what you like and what can be improved"
          maxLength={ReviewSettings.MAX_LENGTH}
          value={userForm.comment}
          onChange={handleFieldChange}
        ></textarea>
        <div className="reviews__button-wrapper">
          <p className="reviews__help">
            To submit review please make sure to set{` `}
            <span className="reviews__star">rating</span> and describe your stay
            with at least <b className="reviews__text-amount">50 characters</b>.
          </p>
          <button
            className="reviews__submit form__submit button"
            type="submit"
            disabled={
              userForm.comment.length < ReviewSettings.MIN_LENGTH ||
              userForm.rating === null ||
              isLoading
            }
          >
            {isLoading ? `...` : `Submit`}
          </button>
        </div>
      </form>
    </React.Fragment>
  );
};

export default CommentForm;
