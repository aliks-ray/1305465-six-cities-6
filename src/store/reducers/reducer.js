import {ActionType} from "../actions.js";
import {OFFERS} from "../../mocks/offers.js";
import {Cities, SortingTypes} from "../../consts/consts.js";

const initialState = {
  currentCityName: Cities.PARIS,
  offers: OFFERS,
  adCount: 5,
  activeSorting: SortingTypes.POPULAR
};

const reducer = (state = initialState, action) => {
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
    default:
      return state;
  }
};

export {reducer};
