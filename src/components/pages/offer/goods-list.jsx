import React from "react";
import {offerType} from "../../../prop-types/prop-types.js";

const GoodsList = ({offer}) => (
  <ul className="property__inside-list">
    {offer.goods.map((good, index) => (
      <li key={`good-${index}`} className="property__inside-item">
        {good}
      </li>
    ))}
  </ul>
);

GoodsList.propTypes = {
  offer: offerType.isRequired
};

export default GoodsList;
