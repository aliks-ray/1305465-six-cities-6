import {SortingTypes} from "../consts/consts.js";

export const getRating = (offer) => {
  const STAR_WIDTH = 20;
  return Math.round(offer) * STAR_WIDTH + `%`;
};

export const formatReviewDate = (date) => {
  const reviewDate = new Date(date);

  return reviewDate.toLocaleDateString(`en-US`, {
    year: `numeric`,
    month: `long`
  });
};

export const sortOffers = (offers, sortingType) => {
  switch (sortingType) {
    case SortingTypes.PRICE_LOW:
      return [...offers].sort((a, b) => a.price - b.price);
    case SortingTypes.PRICE_HIGH:
      return [...offers].sort((a, b) => b.price - a.price);
    case SortingTypes.RATING:
      return [...offers].sort((a, b) => b.rating - a.rating);
    default:
      return [...offers];
  }
};
