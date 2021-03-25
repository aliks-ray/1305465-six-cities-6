import React from "react";
import PropTypes from "prop-types";

const GoodsList = ({goods}) => (
  <ul className="property__inside-list">
    {goods.map((good, index) => (
      <li key={`good-${index}`} className="property__inside-item">
        {good}
      </li>
    ))}
  </ul>
);

GoodsList.propTypes = {
  goods: PropTypes.arrayOf(PropTypes.string.isRequired)
};

export default GoodsList;
