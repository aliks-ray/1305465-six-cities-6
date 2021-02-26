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
