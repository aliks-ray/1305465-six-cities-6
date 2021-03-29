import React from "react";
import PropTypes from "prop-types";
import {getRating} from "../../../utils/utils.js";
import {useDispatch, useSelector} from "react-redux";
import {Link, useHistory} from "react-router-dom";
import {offerType} from "../../../prop-types/prop-types.js";
import {
  CardSettings,
  AuthorizationStatus,
  FavoriteStatus
} from "../../../consts/consts.js";
import classNames from "classnames";
import {updateFavoriteOfferStatus} from "../../../store/api-actions.js";

const Card = ({offer, cardType, onMouseEnter, onMouseLeave}) => {
  const dispatch = useDispatch();
  const {authInfo, authorizationStatus} = useSelector((state) => state.USER);
  const isUserAuthorized = authorizationStatus === AuthorizationStatus.AUTH;

  const checkPremium = () =>
    offer.isPremium && (
      <div className="place-card__mark">
        <span>Premium</span>
      </div>
    );

  const getUpdatedFavoriteStatus = (isCurrentlyFavorite) =>
    isCurrentlyFavorite ? FavoriteStatus.REMOVE : FavoriteStatus.ADD;

  const ifPageNotMain = cardType === CardSettings.NEAR;

  const history = useHistory();

  const handleFavoriteButtonClick = () => {
    if (isUserAuthorized && authInfo.id) {
      dispatch(
          updateFavoriteOfferStatus(
              offer.id,
              getUpdatedFavoriteStatus(offer.isFavorite)
          )
      );
    } else {
      history.push(`/login`);
    }
  };

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
        <Link to={`/offer/${offer.id}`}>
          <img
            className="place-card__image"
            src={offer.previewImage}
            width="260"
            height="200"
            alt="Place image"
          />
        </Link>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{offer.price}</b>
            <span className="place-card__price-text">/&nbsp;night</span>
          </div>
          <button
            className={`${
              isUserAuthorized && authInfo.id && offer.isFavorite
                ? `place-card__bookmark-button--active`
                : ``
            } place-card__bookmark-button button`}
            type="button"
            onClick={handleFavoriteButtonClick}
          >
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
          <Link to={`/offer/${offer.id}`}>{offer.title}</Link>
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
