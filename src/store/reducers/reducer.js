import {ActionType} from "../actions.js";
import {
  adaptOffersData,
  adaptOfferData,
  adaptReviewsData
} from "../../api/adapter/adapter.js";
import {
  Cities,
  SortingTypes,
  AuthorizationStatus
} from "../../consts/consts.js";

const initialState = {
  currentCityName: Cities.PARIS,
  authorizationStatus: AuthorizationStatus.NO_AUTH,
  isOffersLoaded: false,
  offers: [],
  activeSorting: SortingTypes.POPULAR,
  authInfo: {},
  offer: {},
  reviews: [],
  nearbyOffers: [],
  onLoadOfferData: false,
  onLoadNearbyData: false,
  onLoadReviewsData: false,
  onLoadReviewsFormData: false,
  reviewsFormError: ``
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.SET_CITY:
      return {
        ...state,
        currentCityName: action.payload
      };
    case ActionType.CHANGE_SORTING:
      return {
        ...state,
        activeSorting: action.payload
      };
    case ActionType.REQUIRED_AUTHORIZATION:
      return {
        ...state,
        authorizationStatus: action.payload
      };
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
    case ActionType.ADD_REVIEWS:
      return {
        ...state,
        reviews: action.payload,
        onLoadReviewsFormData: true,
        reviewsFormError: ``
      };
    case ActionType.SET_AUTH_INFO: {
      return {
        ...state,
        authInfo: action.payload
      };
    }
    default:
      return state;
  }
};

export {reducer};
