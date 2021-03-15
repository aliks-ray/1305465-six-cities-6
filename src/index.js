import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/app.jsx";
import {createStore, applyMiddleware} from "redux";
import {composeWithDevTools} from "redux-devtools-extension";
import {Provider} from "react-redux";
import {reducer} from "./store/reducers/reducer.js";
import thunk from "redux-thunk";
import {createAPI} from "./api/api.js";
import {AuthorizationStatus} from "./consts/consts.js";
import {requireAuthorization} from "./store/actions.js";
import {checkAuth, fetchOffersList} from "./store/api-actions.js";

const Setting = {
  AD_COUNT: 5
};

const api = createAPI(() =>
  store.dispatch(requireAuthorization(AuthorizationStatus.NO_AUTH))
);

const store = createStore(
    reducer,
    composeWithDevTools(applyMiddleware(thunk.withExtraArgument(api)))
);

store.dispatch(checkAuth());
store.dispatch(fetchOffersList());

ReactDOM.render(
    <Provider store={store}>
      <App adCount={Setting.AD_COUNT} offers={[]} reviews={[]} />
    </Provider>,
    document.querySelector(`#root`)
);
