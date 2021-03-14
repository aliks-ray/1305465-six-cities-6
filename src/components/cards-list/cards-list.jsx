import React from "react";
import PropTypes from "prop-types";
import Card from "../card/card.jsx";
import {offerType} from "../../prop-types/prop-types.js";
import {CardsListSettings} from "../../consts/consts.js";

const CardsList = ({offers, cardType, onMouseEnter, onMouseLeave}) => {
  return (
    <div
      className={`${CardsListSettings[cardType].containerClass} places__list`}
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

export default CardsList;
