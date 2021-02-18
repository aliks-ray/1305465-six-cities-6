import React, {useState} from "react";
import PropTypes from "prop-types";
import PlaceCard from "../card/card";
import {offerType} from "../../prop-types/prop-types.js";

const OffersList = ({offers}) => {
  const [placeCardId, setPlaceCardId] = useState(0);

  return (
    <div className="cities__places-list places__list tabs__content">
      {offers.map((offer) => (
        <PlaceCard
          key={offer.id}
          offer={offer}
          placeCardId={placeCardId}
          setPlaceCardId={setPlaceCardId}
        />
      ))}
    </div>
  );
};

OffersList.propTypes = {
  offers: PropTypes.arrayOf(offerType).isRequired
};

export default OffersList;
