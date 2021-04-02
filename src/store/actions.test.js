import {
  ActionType,
  setCity,
  changeSorting,
  loadOffers,
  loadOffer,
  loadNearby,
  loadReviews,
  loadFavorites,
  updateFavoriteStatus,
  requireAuthorization,
  setAuthInfo,
  redirectToRoute,
  addReviews} from './actions.js';

describe(`Action creators work correctly`, () => {
  it(`setCity action creator returns correct action`, () => {
    const expectedAction = {
      type: ActionType.SET_CITY,
      payload: `test`,
    };

    expect(setCity(`test`)).toEqual(expectedAction);
  });

  it(`changeSorting action creator returns correct action`, () => {
    const expectedAction = {
      type: ActionType.CHANGE_SORTING,
      payload: `test`,
    };

    expect(changeSorting(`test`)).toEqual(expectedAction);
  });

  it(`loadOffers action creator returns correct action`, () => {
    const expectedAction = {
      type: ActionType.LOAD_OFFERS,
      payload: `test`,
    };

    expect(loadOffers(`test`)).toEqual(expectedAction);
  });

  it(`loadOffer action creator returns correct action`, () => {
    const expectedAction = {
      type: ActionType.LOAD_OFFER,
      payload: `test`,
    };

    expect(loadOffer(`test`)).toEqual(expectedAction);
  });

  it(`loadNearby action creator returns correct action`, () => {
    const expectedAction = {
      type: ActionType.LOAD_NEARBY,
      payload: `test`,
    };

    expect(loadNearby(`test`)).toEqual(expectedAction);
  });

  it(`loadReviews action creator returns correct action`, () => {
    const expectedAction = {
      type: ActionType.LOAD_REVIEWS,
      payload: `test`,
    };

    expect(loadReviews(`test`)).toEqual(expectedAction);
  });

  it(`loadFavorites action creator returns correct action`, () => {
    const expectedAction = {
      type: ActionType.LOAD_FAVORITES,
      payload: `test`,
    };

    expect(loadFavorites(`test`)).toEqual(expectedAction);
  });

  it(`updateFavoriteStatus action creator returns correct action`, () => {
    const expectedAction = {
      type: ActionType.UPDATE_FAVORITE_STATUS,
      payload: `test`,
    };

    expect(updateFavoriteStatus(`test`)).toEqual(expectedAction);
  });

  it(`addReviews action creator returns correct action`, () => {
    const expectedAction = {
      type: ActionType.ADD_REVIEWS,
      payload: `test`,
    };

    expect(addReviews(`test`)).toEqual(expectedAction);
  });

  it(`requireAuthorization action creator returns correct action`, () => {
    const expectedAction = {
      type: ActionType.REQUIRED_AUTHORIZATION,
      payload: `test`,
    };

    expect(requireAuthorization(`test`)).toEqual(expectedAction);
  });

  it(`setAuthInfo action creator returns correct action`, () => {
    const expectedAction = {
      type: ActionType.SET_AUTH_INFO,
      payload: `test`,
    };

    expect(setAuthInfo(`test`)).toEqual(expectedAction);
  });

  it(`redirectToRoute action creator returns correct action`, () => {
    const expectedAction = {
      type: ActionType.REDIRECT_TO_ROUTE,
      payload: `test`,
    };

    expect(redirectToRoute(`test`)).toEqual(expectedAction);
  });
});
