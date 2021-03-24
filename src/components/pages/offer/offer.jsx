import React, {useState, useEffect} from "react";
import Header from "../../layout/header/header.jsx";
import CommentForm from "../../reviews/comment-form/comment-form.jsx";
import PropTypes from "prop-types";
import {useParams} from "react-router-dom";
import {offerType, reviewType} from "../../../prop-types/prop-types.js";
import Map from "../../map/map.jsx";
import ReviewsList from "../../reviews/reviews-list/reviews-list.jsx";
import CardsList from "../../cards/cards-list/cards-list.jsx";
import LoadingScreen from "../../layout/loading-screen/loading-screen.jsx";
import {getRating} from "../../../utils/utils.js";
import {connect} from "react-redux";
import {
  fetchOffer,
  fetchReviews,
  fetchNearby
} from "../../../store/api-actions.js";
import {AuthorizationStatus} from "../../../consts/consts.js";
import ImagesList from "./images-list.jsx";
import GoodsList from "./goods-list.jsx";
import HostInfo from "./host-info.jsx";

const OfferPage = ({
  authorizationStatus,
  authInfo,
  offer,
  onLoadOffer,
  onLoadOfferData,
  nearbyOffers,
  onLoadNearby,
  onLoadNearbyData,
  reviews,
  onLoadReviews,
  onLoadReviewsData
}) => {
  const isUserAuthorized = authorizationStatus === AuthorizationStatus.AUTH;
  const {id} = useParams();
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
            <ImagesList offer={offer} />
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
                  className="property__bookmark-button button"
                  type="button"
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
                <GoodsList offer={offer} />
              </div>
              <div className="property__host">
                <h2 className="property__host-title">Meet the host</h2>
                <HostInfo offer={offer} />
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
            <Map offers={nearbyOffers} currentOfferId={currentOfferId} />
          </section>
        </section>

        <div className="container">
          <section className="near-places places">
            <h2 className="near-places__title">
              Other places in the neighbourhood
            </h2>
            <CardsList
              offers={nearbyOffers}
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
  authorizationStatus: PropTypes.string.isRequired,
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
  authInfo: PropTypes.shape({
    avatarUrl: PropTypes.string,
    email: PropTypes.string,
    id: PropTypes.number,
    isPro: PropTypes.bool,
    name: PropTypes.string
  })
};

const mapStateToProps = (state) => ({
  reviews: state.reviews,
  authorizationStatus: state.authorizationStatus,
  authInfo: state.authInfo,
  offer: state.offer,
  onLoadOfferData: state.onLoadOfferData,
  nearbyOffers: state.nearbyOffers,
  onLoadNearbyData: state.onLoadNearbyData,
  onLoadReviewsData: state.onLoadReviewsData
});

const mapDispatchToProps = (dispatch) => ({
  onLoadOffer: (id) => dispatch(fetchOffer(id)),
  onLoadNearby: (id) => dispatch(fetchNearby(id)),
  onLoadReviews: (id) => dispatch(fetchReviews(id))
});

export {OfferPage};
export default connect(mapStateToProps, mapDispatchToProps)(OfferPage);
