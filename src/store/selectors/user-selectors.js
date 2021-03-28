import {NameSpace} from "../reducers/root-reducer.js";

export const getAuthorizationStatus = (state) =>
  state[NameSpace.USER].authorizationStatus;
export const getAuthInfo = (state) => state[NameSpace.USER].authInfo;
