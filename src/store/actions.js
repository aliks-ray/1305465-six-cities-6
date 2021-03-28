export const ActionType = {
  SET_CITY: `main/set-sity`,
  CHANGE_SORTING: `sorting/changeSorting`,
  LOAD_OFFERS: `offers/loadOffers`,
  LOAD_NEARBY: `offer/loadNearby`,
  LOAD_OFFER: `offer/loadOffer`,
  LOAD_REVIEWS: `offer/loadReviews`,
  LOAD_FAVORITES: `offer/loadFavorites`,
  UPDATE_FAVORITE_STATUS: `offer/updateFavoriteStatus`,
  ADD_REVIEWS: `offer/addReviews`,
  SET_AUTH_INFO: `user/setAuthInfo`,
  REQUIRED_AUTHORIZATION: `user/requiredAuthorization`,
  REDIRECT_TO_ROUTE: `route/redirectToRoute`
};

export const setCity = (cityName) => ({
  type: ActionType.SET_CITY,
  payload: cityName
});

export const changeSorting = (sorting) => ({
  type: ActionType.CHANGE_SORTING,
  payload: sorting
});

export const loadOffers = (offers) => ({
  type: ActionType.LOAD_OFFERS,
  payload: offers
});

export const loadOffer = (offer) => ({
  type: ActionType.LOAD_OFFER,
  payload: offer
});

export const loadNearby = (offers) => ({
  type: ActionType.LOAD_NEARBY,
  payload: offers
});

export const loadReviews = (reviews) => ({
  type: ActionType.LOAD_REVIEWS,
  payload: reviews
});

export const loadFavorites = (offers) => ({
  type: ActionType.LOAD_FAVORITES,
  payload: offers
});

export const updateFavoriteStatus = (offer) => ({
  type: ActionType.UPDATE_FAVORITE_STATUS,
  payload: offer
});

export const addReviews = (response) => ({
  type: ActionType.ADD_REVIEWS,
  payload: response
});

export const requireAuthorization = (status) => ({
  type: ActionType.REQUIRED_AUTHORIZATION,
  payload: status
});

export const setAuthInfo = (authInfo) => ({
  type: ActionType.SET_AUTH_INFO,
  payload: authInfo
});

export const redirectToRoute = (url) => ({
  type: ActionType.REDIRECT_TO_ROUTE,
  payload: url
});
