import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/app.jsx";

const Setting = {
  AD_COUNT: 312
};

ReactDOM.render(
    <App adCount={Setting.AD_COUNT} />,
    document.querySelector(`#root`)
);
