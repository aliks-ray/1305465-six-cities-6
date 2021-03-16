import {ActionType} from "../actions.js";
import {adaptOffersData} from "../../api/adapter/adapter.js";
import {
  Cities,
  SortingTypes,
  AuthorizationStatus
} from "../../consts/consts.js";

const initialState = {
  currentCityName: Cities.PARIS,
  authorizationStatus: AuthorizationStatus.NO_AUTH,
  isOffersLoaded: false,
  offers: [],
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
    case ActionType.LOAD_OFFERS:
      return {
        ...state,
        offers: adaptOffersData(action.payload),
        isOffersLoaded: true
      };
    case ActionType.REQUIRED_AUTHORIZATION:
      return {
        ...state,
        authorizationStatus: action.payload
      };
    default:
      return state;
  }
};

export {reducer};
