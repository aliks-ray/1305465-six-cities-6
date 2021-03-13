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

export const reviewType = PropTypes.shape({
  comment: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  rating: PropTypes.number.isRequired,
  user: PropTypes.shape({
    avatarUrl: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    isPro: PropTypes.bool.isRequired,
    name: PropTypes.string.isRequired
  })
});

export const sortingTypes = PropTypes.shape({
  POPULAR: PropTypes.string,
  PRICE_LOW_TO_HIGH: PropTypes.string,
  PRICE_HIGH_TO_LOW: PropTypes.string,
  TOP_RATED_FIRST: PropTypes.string
});
