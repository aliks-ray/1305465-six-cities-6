import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/app.jsx";
import {OFFERS} from "./mocks/offers";
import {REVIEWS} from "./mocks/reviews";
import {createStore} from "redux";
import {Provider} from "react-redux";
import {reducer} from "./store/reducers/reducer.js";

const Setting = {
  AD_COUNT: 5
};

const store = createStore(reducer);

ReactDOM.render(
    <Provider store={store}>
      <App adCount={Setting.AD_COUNT} offers={OFFERS} reviews={REVIEWS} />
    </Provider>,
    document.querySelector(`#root`)
);
