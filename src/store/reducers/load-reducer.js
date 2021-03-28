import {ActionType} from "../actions.js";
import {
  adaptOffersData,
  adaptOfferData,
  adaptReviewsData
} from "../../api/adapter/adapter.js";
import {updateOfferInList} from "../../utils/utils.js";

const initialState = {
  isOffersLoaded: false,
  offers: [],
  offer: {},
  reviews: [],
  nearbyOffers: [],
  favoriteOffers: [],
  onLoadOfferData: false,
  onLoadNearbyData: false,
  onLoadReviewsData: false,
  onLoadReviewsFormData: false,
  onLoadFavoriteData: false
};

const loadReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.LOAD_OFFERS:
      return {
        ...state,
        offers: adaptOffersData(action.payload),
        isOffersLoaded: true
      };
    case ActionType.LOAD_OFFER:
      return {
        ...state,
        offer: adaptOfferData(action.payload),
        onLoadOfferData: true
      };
    case ActionType.LOAD_NEARBY:
      return {
        ...state,
        nearbyOffers: adaptOffersData(action.payload),
        onLoadNearbyData: true
      };
    case ActionType.LOAD_REVIEWS:
      return {
        ...state,
        reviews: adaptReviewsData(action.payload),
        onLoadReviewsData: true
      };
    case ActionType.LOAD_FAVORITES:
      return {
        ...state,
        favoriteOffers: adaptOffersData(action.payload),
        onLoadFavoriteData: true
      };
    case ActionType.UPDATE_FAVORITE_OFFER_STATUS:
      return {
        ...state,
        favoriteOffers: updateOfferInList(action.payload, state.offers)
      };
    default:
      return state;
  }
};

export default loadReducer;
