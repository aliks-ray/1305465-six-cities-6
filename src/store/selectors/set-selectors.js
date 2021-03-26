import {NameSpace} from "../reducers/root-reducer.js";

export const setCurrentCityName = (state) =>
  state[NameSpace.DATA_SET].currentCityName;
export const setCurrentSorting = (state) =>
  state[NameSpace.DATA_SET].activeSorting;
export const setNewReview = (state) => state[NameSpace.DATA_SET].reviews;
export const setNewReviewStatus = (state) =>
  state[NameSpace.DATA_SET].onLoadReviewsFormData;
export const getReviewFormError = (state) =>
  state[NameSpace.DATA_SET].reviewsFormError;
