import React from "react";
import {useDispatch} from "react-redux";
import {getRating} from "../../../utils/utils.js";
import {Link} from "react-router-dom";
import {offerType} from "../../../prop-types/prop-types.js";
import {FavoriteStatus} from "../../../consts/consts.js";
import {updateFavoriteOfferStatus} from "../../../store/api-actions.js";

const FavoriteCard = ({offer}) => {
  const dispatch = useDispatch();
  const getUpdatedFavoriteStatus = (isCurrentlyFavorite) =>
    isCurrentlyFavorite ? FavoriteStatus.REMOVE : FavoriteStatus.ADD;

  const handleFavoriteButtonClick = () => {
    dispatch(
        updateFavoriteOfferStatus(
            offer.id,
            getUpdatedFavoriteStatus(offer.isFavorite)
        )
    );
  };
  return (
    <article className="favorites__card place-card">
      <div className="favorites__image-wrapper place-card__image-wrapper">
        <Link to={`/offer/${offer.id}`}>
          <img
            className="place-card__image"
            src={offer.previewImage}
            width="150"
            height="110"
            alt="Place image"
          />
        </Link>
      </div>
      <div className="favorites__card-info place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{offer.price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button
            className="place-card__bookmark-button place-card__bookmark-button--active button"
            type="button"
            onClick={handleFavoriteButtonClick}
          >
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark"></use>
            </svg>
            <span className="visually-hidden">In bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{width: getRating(offer.rating)}}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={`/offer/${offer.id}`}>{offer.title}</Link>
        </h2>
        <p className="place-card__type">{offer.type}</p>
      </div>
    </article>
  );
};

FavoriteCard.propTypes = {
  offer: offerType.isRequired
};

export default FavoriteCard;
