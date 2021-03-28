import {NameSpace} from "../reducers/root-reducer.js";

export const getOffer = (state) => state[NameSpace.DATA_LOAD].offer;
export const getOfferStatus = (state) =>
  state[NameSpace.DATA_LOAD].onLoadOfferData;
export const getNearbyOffers = (state) =>
  state[NameSpace.DATA_LOAD].nearbyOffers;
export const getNearbyOffersStatus = (state) =>
  state[NameSpace.DATA_LOAD].onLoadNearbyData;
export const getReviews = (state) => state[NameSpace.DATA_LOAD].reviews;
export const getReviewsStatus = (state) =>
  state[NameSpace.DATA_LOAD].onLoadReviewsData;
export const getOffers = (state) => state[NameSpace.DATA_LOAD].offers;
export const getOffersStatus = (state) =>
  state[NameSpace.DATA_LOAD].isOffersLoaded;
export const getFavorites = (state) =>
  state[NameSpace.DATA_LOAD].favoriteOffers;
export const getFavoritesStatus = (state) =>
  state[NameSpace.DATA_LOAD].onLoadFavoriteData;
