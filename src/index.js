import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/app.jsx";
import {OFFERS} from "./mocks/offers";
import {REVIEWS} from "./mocks/reviews";

const Setting = {
  AD_COUNT: 312
};

ReactDOM.render(
    <App adCount={Setting.AD_COUNT} offers={OFFERS} reviews={REVIEWS} />,
    document.querySelector(`#root`)
);
