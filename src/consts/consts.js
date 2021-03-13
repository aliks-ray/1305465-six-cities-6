export const baseCoords = {
  zoom: 12,
  lat: 52.38333,
  lng: 4.9
};

export const CardSettings = {
  near: {
    containerClass: `near-places__list`,
    cardClass: `near-places__card`,
    imageClass: `near-places__image-wrapper`
  },
  main: {
    containerClass: `cities__places-list tabs__content`,
    cardClass: `cities__place-card`,
    imageClass: `cities__image-wrapper`
  }
};

export const CardsListSettings = {
  near: {
    containerClass: `near-places__list`
  },
  main: {
    containerClass: `cities__places-list tabs__content`
  }
};

export const Cities = {
  PARIS: `Paris`,
  AMSTERDAM: `Amsterdam`,
  COLOGNE: `Cologne`,
  BRUSSELS: `Brussels`,
  HAMBURG: `Hamburg`,
  DUSSELDORF: `Dusseldorf`
};

export const SortingTypes = {
  POPULAR: `Popular`,
  PRICE_LOW: `Price: low to high`,
  PRICE_HIGH: `Price: high to low`,
  RATING: `Top rated first`
};
