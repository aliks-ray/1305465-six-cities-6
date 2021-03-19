import React from "react";
import ReactDOM from "react-dom";
import {createStore, applyMiddleware} from "redux";
import {composeWithDevTools} from "redux-devtools-extension";
import thunk from "redux-thunk";
import {Provider} from "react-redux";
import App from "./components/app/app.jsx";
import {reducer} from "./store/reducers/reducer.js";
import {createAPI} from "./api/api.js";
import {AuthorizationStatus} from "./consts/consts.js";
import {requireAuthorization} from "./store/actions.js";
import {checkAuth, fetchOffersList} from "./store/api-actions.js";
import {redirect} from "./store/redirect.js";

const Setting = {
  AD_COUNT: 5
};

const api = createAPI(() =>
  store.dispatch(requireAuthorization(AuthorizationStatus.NO_AUTH))
);

const store = createStore(
    reducer,
    composeWithDevTools(
        applyMiddleware(thunk.withExtraArgument(api)),
        applyMiddleware(redirect)
    )
);

store.dispatch(checkAuth());
store.dispatch(fetchOffersList());

ReactDOM.render(
    <Provider store={store}>
      <App adCount={Setting.AD_COUNT} offers={[]} reviews={[]} />
    </Provider>,
    document.querySelector(`#root`)
);
