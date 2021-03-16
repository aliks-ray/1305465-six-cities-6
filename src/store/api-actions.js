import {loadOffers, requireAuthorization} from "./actions.js";
import {AuthorizationStatus} from "../consts/consts.js";

export const fetchOffersList = () => (dispatch, _getState, api) =>
  api.get(`/hotels`).then(({data}) => dispatch(loadOffers(data)));

export const checkAuth = () => (dispatch, _getState, api) =>
  api
    .get(`/login`)
    .then(() => dispatch(requireAuthorization(AuthorizationStatus.AUTH)))
    .catch(() => {});

export const login = ({login: email, password}) => (
    dispatch,
    _getState,
    api
) =>
  api
    .post(`/login`, {email, password})
    .then(() => dispatch(requireAuthorization(AuthorizationStatus.AUTH)));
