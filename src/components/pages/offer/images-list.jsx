import React from "react";
import PropTypes from "prop-types";

const ImagesList = ({hotelImages}) => (
  <div className="property__gallery">
    {hotelImages.slice(0, 6).map((image, index) => (
      <div key={`image-${index}`} className="property__image-wrapper">
        <img className="property__image" src={image} alt="Photo studio" />
      </div>
    ))}
  </div>
);

ImagesList.propTypes = {
  hotelImages: PropTypes.arrayOf(PropTypes.string.isRequired)
};

export default ImagesList;
