import React from "react";
import PropTypes from "prop-types";
import {setRating} from "../../utils/utils.js";
import {Link} from "react-router-dom";
import {propTypesOffer} from "../../mocks/offers";

const Card = ({offer, setPlaceCardId}) => {
  const checkPremium = () => {
    if (offer.isPremium) {
      <div className="place-card__mark">
        <span>Premium</span>
      </div>;
    }
  };

  const checkFavorite = () => {
    let buttonFavoriteClasses = [`place-card__bookmark-button`, `button`];
    if (offer.isFavorite) {
      buttonFavoriteClasses.push(`place-card__bookmark-button--active`);
    }
    return buttonFavoriteClasses.join(` `);
  };

  return (
    <article
      className="cities__place-card place-card"
      onMouseOver={() => setPlaceCardId(offer)}
    >
      {checkPremium()}
      <div className="place-card__mark">
        <span>Premium</span>
      </div>
      <div className="cities__image-wrapper place-card__image-wrapper">
        <a href="#">
          <img
            className="place-card__image"
            src={offer.previewImage}
            width="260"
            height="200"
            alt="Place image"
          />
        </a>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{offer.price}</b>
            <span className="place-card__price-text">/&nbsp;night</span>
          </div>
          <button className={checkFavorite()} type="button">
            <svg className="place-card__bookmark-icon" width={18} height={19}>
              <use xlinkHref="#icon-bookmark" />
            </svg>
            <span className="visually-hidden">To bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{width: setRating(offer.rating)}}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to="/offer/id">{offer.title}</Link>
        </h2>
        <p className="place-card__type">{offer.type}</p>
      </div>
    </article>
  );
};

Card.propTypes = {
  offer: PropTypes.shape(propTypesOffer).isRequired,
  setPlaceCardId: PropTypes.func.isRequired
};

export default Card;
