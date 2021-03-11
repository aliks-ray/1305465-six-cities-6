import {ActionType} from "../actions.js";
import {OFFERS} from "../../mocks/offers.js";
import {Cities} from "../../consts/consts.js";

const initialState = {
  currentCityName: Cities.paris,
  offers: OFFERS,
  adCount: 5
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.SET_CITY:
      return {
        ...state,
        currentCityName: action.payload
      };
    default:
      return state;
  }
};

export {reducer};