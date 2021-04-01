import React from "react";
import PropTypes from "prop-types";
import {offerType} from "../../../prop-types/prop-types.js";
import Card from "../card/card.jsx";
import {CardSettings} from "../../../consts/consts.js";
import classNames from "classnames";

const CardsList = ({offers, cardType, onMouseEnter, onMouseLeave}) => {
  const isNotMainPage = cardType === CardSettings.NEAR;

  return (
    <div
      className={classNames(`places__list cities__places-list tabs__content`, {
        "places__list near-places__list": isNotMainPage
      })}
    >
      {offers.map((offer) => (
        <Card
          key={offer.id}
          id={offer.id}
          offer={offer}
          cardType={cardType}
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
        />
      ))}
    </div>
  );
};

CardsList.propTypes = {
  offers: PropTypes.arrayOf(offerType).isRequired,
  cardType: PropTypes.string.isRequired,
  onMouseEnter: PropTypes.func,
  onMouseLeave: PropTypes.func
};

export default React.memo(CardsList);
