import {
  loadOffers,
  loadOffer,
  loadNearby,
  loadReviews,
  requireAuthorization,
  setAuthInfo,
  redirectToRoute,
  addReviews
} from "./actions.js";
import {AuthorizationStatus} from "../consts/consts.js";
import {adaptAuthData, adaptReviewData} from "../api/adapter/adapter.js";

export const sortDate = (a, b) => Date.parse(a.date) - Date.parse(b.date);

export const fetchOffersList = () => (dispatch, _getState, api) =>
  api.get(`/hotels`).then(({data}) => dispatch(loadOffers(data)));

export const fetchOffer = (id) => (dispatch, _getState, api) =>
  api
    .get(`/hotels/${id}`)
    .then(({data}) => dispatch(loadOffer(data)))
    .catch(function (error) {
      if (error.response && error.response.status === 404) {
        dispatch(redirectToRoute(`/page404`));
      }
    });

export const fetchNearby = (id) => (dispatch, _getState, api) =>
  api
    .get(`/hotels/${id}/nearby`)
    .then(({data}) => dispatch(loadNearby(data)));

export const fetchReviews = (id) => (dispatch, _getState, api) =>
  api.get(`/comments/${id}`).then(({data}) => {
    return dispatch(loadReviews(data));
  });

export const addNewReviews = (id, review) => (dispatch, _getState, api) =>
  api
    .post(`/comments/${id}`, review)
    .then(({data}) => {
      const sortedComments = data.sort(sortDate);
      dispatch(addReviews(sortedComments.map((item) => adaptReviewData(item))));
    })
    .catch(() => {});

export const checkAuth = () => (dispatch, _getState, api) =>
  api
    .get(`/login`)
    .then(() => dispatch(requireAuthorization(AuthorizationStatus.AUTH)))
    .catch(() => {});

export const login = ({email, password}) => (dispatch, _getState, api) =>
  api
    .post(`/login`, {email, password})
    .then(({data}) => {
      dispatch(requireAuthorization(AuthorizationStatus.AUTH));
      return data;
    })
    .then((data) => adaptAuthData(data))
    .then((data) => dispatch(setAuthInfo(data)))
    .then(() => dispatch(redirectToRoute(`/`)));
