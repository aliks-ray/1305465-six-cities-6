import React from "react";
import {offerType} from "../../../prop-types/prop-types.js";

const ImagesList = ({offer}) => (
  <div className="property__gallery">
    {offer.hotelImages.slice(0, 6).map((image, index) => (
      <div key={`image-${index}`} className="property__image-wrapper">
        <img className="property__image" src={image} alt="Photo studio" />
      </div>
    ))}
  </div>
);

ImagesList.propTypes = {
  offer: offerType.isRequired
};

export default ImagesList;
