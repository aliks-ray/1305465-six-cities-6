import React, {useState} from "react";
import PropTypes from "prop-types";
import Card from "../card/card.jsx";
import {offerType} from "../../prop-types/prop-types.js";
import {CardsListSettings} from "../../consts/consts.js";

const CardsList = ({offers, cardType}) => {
  const [placeCardId, setPlaceCardId] = useState(0);

  return (
    <div
      className={`${CardsListSettings[cardType].containerClass} places__list`}
    >
      {offers.map((offer) => (
        <Card
          key={offer.id}
          offer={offer}
          placeCardId={placeCardId}
          setPlaceCardId={setPlaceCardId}
          cardType={cardType}
        />
      ))}
    </div>
  );
};

CardsList.propTypes = {
  offers: PropTypes.arrayOf(offerType).isRequired,
  cardType: PropTypes.string.isRequired
};

export default CardsList;
