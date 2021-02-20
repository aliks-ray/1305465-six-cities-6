import PropTypes from "prop-types";

export const offerType = PropTypes.shape({
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  rating: PropTypes.number.isRequired,
  previewImage: PropTypes.string.isRequired,
  isFavorite: PropTypes.bool.isRequired,
  isPremium: PropTypes.bool.isRequired,
  city: PropTypes.string.isRequired
});

export const baseMapCoordinates = PropTypes.shape({
  zoom: PropTypes.number.isRequired,
  lat: PropTypes.number.isRequired,
  lng: PropTypes.number.isRequired
});