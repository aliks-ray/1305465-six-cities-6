import {ActionType} from "../actions.js";
import {Cities, SortingTypes} from "../../consts/consts.js";

const initialState = {
  currentCityName: Cities.PARIS,
  activeSorting: SortingTypes.POPULAR,
  reviews: [],
  onLoadReviewsFormData: false,
  reviewsFormError: ``
};

const setReducer = (state = initialState, action) => {
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
    case ActionType.ADD_REVIEWS:
      return {
        ...state,
        reviews: action.payload,
        onLoadReviewsFormData: true,
        reviewsFormError: ``
      };
    default:
      return state;
  }
};

export default setReducer;
