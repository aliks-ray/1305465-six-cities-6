export const ActionType = {
  SET_CITY: `main/set-sity`,
  CHANGE_SORTING: `sorting/changeSorting`,
  LOAD_OFFERS: `offers/loadOffers`,
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
