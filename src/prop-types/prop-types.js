import PropTypes from "prop-types";

export const offerType = PropTypes.shape({
  offer: PropTypes.shape({
    bedrooms: PropTypes.number.isRequired,
    city: PropTypes.shape({
      location: PropTypes.shape({
        latitude: PropTypes.number.isRequired,
        longitude: PropTypes.number.isRequired,
        zoom: PropTypes.number.isRequired
      }),
      cityName: PropTypes.string.isRequired
    }),
    description: PropTypes.array.isRequired,
    goods: PropTypes.arrayOf(PropTypes.string.isRequired),
    host: PropTypes.shape({
      avatarUrl: PropTypes.string,
      userId: PropTypes.number.isRequired,
      isUserPro: PropTypes.bool.isRequired,
      userName: PropTypes.string.isRequired
    }),
    id: PropTypes.string.isRequired,
    previewImage: PropTypes.string.isRequired,
    isFavorite: PropTypes.bool.isRequired,
    isPremium: PropTypes.bool.isRequired,
    point: PropTypes.shape({
      lat: PropTypes.number.isRequired,
      lng: PropTypes.number.isRequired,
      zoom: PropTypes.number.isRequired
    }),
    hotelImages: PropTypes.arrayOf(PropTypes.string.isRequired),
    price: PropTypes.number.isRequired,
    maxAdults: PropTypes.number.isRequired,
    rating: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired
  })
});

export const reviewType = PropTypes.shape({
  review: PropTypes.shape({
    comment: PropTypes.array.isRequired,
    date: PropTypes.object.isRequired,
    id: PropTypes.string.isRequired,
    rating: PropTypes.string.isRequired,
    user: PropTypes.shape({
      avatarUrl: PropTypes.string.isRequired,
      userId: PropTypes.number.isRequired,
      isPro: PropTypes.bool.isRequired,
      name: PropTypes.string.isRequired
    })
  })
});

export const sortingTypes = PropTypes.shape({
  POPULAR: PropTypes.string,
  PRICE_LOW_TO_HIGH: PropTypes.string,
  PRICE_HIGH_TO_LOW: PropTypes.string,
  TOP_RATED_FIRST: PropTypes.string
});
