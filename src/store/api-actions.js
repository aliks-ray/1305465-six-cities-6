import {
  loadOffers,
  requireAuthorization,
  setAuthInfo,
  redirectToRoute
} from "./actions.js";
import {AuthorizationStatus} from "../consts/consts.js";
import {adaptAuthData} from "../api/adapter/adapter.js";

export const fetchOffersList = () => (dispatch, _getState, api) =>
  api.get(`/hotels`).then(({data}) => dispatch(loadOffers(data)));

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
