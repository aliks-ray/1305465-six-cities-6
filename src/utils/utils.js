export const getRating = (offer) => {
  const STAR_WIDTH = 20;
  return Math.round(offer) * STAR_WIDTH + `%`;
};
