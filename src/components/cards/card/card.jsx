import React from "react";
import PropTypes from "prop-types";
import {getRating} from "../../../utils/utils.js";
import {Link} from "react-router-dom";
import {offerType} from "../../../prop-types/prop-types.js";
import {CardSettings} from "../../../consts/consts.js";
import classNames from "classnames";

const Card = ({offer, cardType, onMouseEnter, onMouseLeave}) => {
  const checkPremium = () =>
    offer.isPremium && (
      <div className="place-card__mark">
        <span>Premium</span>
      </div>
    );

  const checkFavorite = () => {
    let buttonFavoriteClasses = [`place-card__bookmark-button`, `button`];
    if (offer.isFavorite) {
      buttonFavoriteClasses.push(`place-card__bookmark-button--active`);
    }
    return buttonFavoriteClasses.join(` `);
  };

  const ifPageNotMain = cardType === CardSettings.NEAR;

  return (
    <article
      className={classNames(`place-card cities__place-card`, {
        "place-card near-places__card": ifPageNotMain
      })}
      onMouseEnter={() => onMouseEnter(offer)}
      onMouseLeave={() => onMouseLeave()}
    >
      {checkPremium()}
      <div className="place-card__mark">
        <span>Premium</span>
      </div>
      <div
        className={classNames(
            `place-card__image-wrapper cities__image-wrapper`,
            {
              "place-card__image-wrapper near-places__image-wrapper": ifPageNotMain
            }
        )}
      >
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
            <span style={{width: getRating(offer.rating)}}></span>
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

Card.defaultProps = {
  onMouseEnter: () => {},
  onMouseLeave: () => {}
};

Card.propTypes = {
  offer: offerType.isRequired,
  cardType: PropTypes.string.isRequired,
  onMouseEnter: PropTypes.func,
  onMouseLeave: PropTypes.func
};

export default Card;
