import {ActionType} from "../actions.js";
import {AuthorizationStatus} from "../../consts/consts.js";

const initialState = {
  authorizationStatus: AuthorizationStatus.NO_AUTH,
  authInfo: {}
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.REQUIRED_AUTHORIZATION:
      return {
        ...state,
        authorizationStatus: action.payload
      };
    case ActionType.SET_AUTH_INFO:
      return {
        ...state,
        authInfo: action.payload
      };
    default:
      return state;
  }
};

export default userReducer;
