export const ActionType = {
  SET_CITY: `main/set-sity`,
  CHANGE_SORTING: `sorting/changeSorting`,
  LOAD_OFFERS: `offers/loadOffers`,
  REQUIRED_AUTHORIZATION: `user/requiredAuthorization`
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
