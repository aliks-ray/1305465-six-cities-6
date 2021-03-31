import React, {useState, useEffect} from "react";
import Header from "../../layout/header/header.jsx";
import CommentForm from "../../reviews/comment-form/comment-form.jsx";
import PropTypes from "prop-types";
import {useParams, useHistory} from "react-router-dom";
import {offerType, reviewType} from "../../../prop-types/prop-types.js";
import Map from "../../map/map.jsx";
import ReviewsList from "../../reviews/reviews-list/reviews-list.jsx";
import CardsList from "../../cards/cards-list/cards-list.jsx";
import LoadingScreen from "../../layout/loading-screen/loading-screen.jsx";
import {getRating} from "../../../utils/utils.js";
import {connect, useSelector} from "react-redux";
import {
  fetchOffer,
  fetchReviews,
  fetchNearby,
  updateFavoriteOfferStatus
} from "../../../store/api-actions.js";
import {AuthorizationStatus, FavoriteStatus} from "../../../consts/consts.js";
import {
  getOffer,
  getOfferStatus,
  getReviews,
  getReviewsStatus,
  getNearbyOffers,
  getNearbyOffersStatus
} from "../../../store/selectors/load-selectors.js";
import ImagesList from "./images-list.jsx";
import GoodsList from "./goods-list.jsx";
import HostInfo from "./host-info.jsx";

const OfferPage = ({
  offer,
  onLoadOffer,
  onLoadOfferData,
  nearbyOffers,
  onLoadNearby,
  onLoadNearbyData,
  reviews,
  onLoadReviews,
  onLoadReviewsData,
  onFavoriteButtonClick
}) => {
  const {authInfo, authorizationStatus} = useSelector((state) => state.USER);
  const isUserAuthorized = authorizationStatus === AuthorizationStatus.AUTH;
  const getUpdatedFavoriteStatus = (isCurrentlyFavorite) =>
    isCurrentlyFavorite ? FavoriteStatus.REMOVE : FavoriteStatus.ADD;
  const {id} = useParams();
  const history = useHistory();
  const [currentOfferId, setCurrentOfferId] = useState(null);
  const mapMargin = {
    marginBottom: `50px`
  };

  const handleMouseEnter = () => {
    setCurrentOfferId(offer.id);
  };
  const handleMouseLeave = () => {
    setCurrentOfferId(null);
  };

  const handleFavoriteButtonClick = () => {
    if (isUserAuthorized && authInfo.id) {
      onFavoriteButtonClick(
          offer.id,
          getUpdatedFavoriteStatus(offer.isFavorite)
      );
    } else {
      history.push(`/login`);
    }
  };

  useEffect(() => {
    onLoadOffer(id);
    onLoadNearby(id);
    onLoadReviews(id);
  }, [id]);

  if (!onLoadOfferData || !onLoadNearbyData || !onLoadReviewsData) {
    return <LoadingScreen />;
  }

  return (
    <div className="page">
      <Header />
      <main className="page__main page__main--property">
        <section className="property">
          <div className="property__gallery-container container">
            <ImagesList hotelImages={offer.hotelImages} />
          </div>
          <div className="property__container container">
            <div className="property__wrapper">
              {offer.isPremium ? (
                <div className="property__mark">
                  <span>Premium</span>
                </div>
              ) : (
                ``
              )}
              <div className="property__name-wrapper">
                <h1 className="property__name">{offer.title}</h1>
                <button
                  className={`${
                    isUserAuthorized && authInfo.id && offer.isFavorite
                      ? `property__bookmark-button--active`
                      : ``
                  } property__bookmark-button button`}
                  type="button"
                  onClick={handleFavoriteButtonClick}
                >
                  <svg
                    className="property__bookmark-icon"
                    width={31}
                    height={33}
                  >
                    <use xlinkHref="#icon-bookmark" />
                  </svg>
                  <span className="visually-hidden">To bookmarks</span>
                </button>
              </div>
              <div className="property__rating rating">
                <div className="property__stars rating__stars">
                  <span style={{width: getRating(offer.rating)}} />
                  <span className="visually-hidden">Rating</span>
                </div>
                <span className="property__rating-value rating__value">
                  {offer.rating}
                </span>
              </div>
              <ul className="property__features">
                <li className="property__feature property__feature--entire">
                  {offer.type}
                </li>
                <li className="property__feature property__feature--bedrooms">
                  {offer.maxAdults} Bedrooms
                </li>
                <li className="property__feature property__feature--adults">
                  Max {offer.maxAdults} adults
                </li>
              </ul>
              <div className="property__price">
                <b className="property__price-value">&euro;{offer.price}</b>
                <span className="property__price-text">&nbsp;night</span>
              </div>
              <div className="property__inside">
                <h2 className="property__inside-title">What&apos;s inside</h2>
                <GoodsList goods={offer.goods} />
              </div>
              <div className="property__host">
                <h2 className="property__host-title">Meet the host</h2>
                <HostInfo host={offer.host} />
                <div className="property__description">
                  <p className="property__text">{offer.description}</p>
                </div>
              </div>
              <section className="property__reviews reviews">
                <h2 className="reviews__title">
                  Reviews &middot;
                  <span className="reviews__amount">{reviews.length}</span>
                </h2>
                <ReviewsList reviews={reviews} />
                {isUserAuthorized && authInfo.id ? (
                  <CommentForm offer={offer} />
                ) : (
                  ` `
                )}
              </section>
            </div>
          </div>
          <section className="map" style={mapMargin}>
            <Map
              offers={nearbyOffers}
              currentOfferId={currentOfferId}
              currentOffer={offer}
              mapType="offer"
            />
          </section>
        </section>

        <div className="container">
          <section className="near-places places">
            <h2 className="near-places__title">
              Other places in the neighbourhood
            </h2>
            <CardsList
              offers={nearbyOffers.slice(0, 3)}
              cardType="near"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            />
          </section>
        </div>
      </main>
    </div>
  );
};

OfferPage.propTypes = {
  reviews: PropTypes.arrayOf(reviewType).isRequired,
  onLoadReviews: PropTypes.func.isRequired,
  onLoadOffer: PropTypes.func.isRequired,
  offer: offerType.isRequired,
  onLoadOfferData: PropTypes.bool.isRequired,
  onLoadNearbyData: PropTypes.bool.isRequired,
  onLoadNearby: PropTypes.func.isRequired,
  nearbyOffers: PropTypes.arrayOf(offerType).isRequired,
  onLoadReviewsData: PropTypes.bool.isRequired,
  onAddReviews: PropTypes.func,
  onFavoriteButtonClick: PropTypes.func.isRequired
};

const mapStateToProps = (state) => ({
  offer: getOffer(state),
  onLoadOfferData: getOfferStatus(state),
  reviews: getReviews(state),
  onLoadReviewsData: getReviewsStatus(state),
  nearbyOffers: getNearbyOffers(state),
  onLoadNearbyData: getNearbyOffersStatus(state)
});

const mapDispatchToProps = (dispatch) => ({
  onLoadOffer: (id) => dispatch(fetchOffer(id)),
  onLoadNearby: (id) => dispatch(fetchNearby(id)),
  onLoadReviews: (id) => dispatch(fetchReviews(id)),
  onFavoriteButtonClick: (id, favoriteStatus) =>
    dispatch(updateFavoriteOfferStatus(id, favoriteStatus))
});

export default connect(mapStateToProps, mapDispatchToProps)(OfferPage);
