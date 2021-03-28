import {combineReducers} from "redux";
import userReducer from "./user-reducer.js";
import loadReducer from "./load-reducer.js";
import setReducer from "./set-reducer.js";

export const NameSpace = {
  USER: `USER`,
  DATA_LOAD: `DATA_LOAD`,
  DATA_SET: `DATA_SET`
};

const rootReducer = combineReducers({
  [NameSpace.USER]: userReducer,
  [NameSpace.DATA_LOAD]: loadReducer,
  [NameSpace.DATA_SET]: setReducer
});

export default rootReducer;
