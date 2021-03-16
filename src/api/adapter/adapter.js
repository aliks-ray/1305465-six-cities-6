export const adaptOfferData = (data) => {
  return {
    bedrooms: data.bedrooms,
    city: {
      location: {
        lat: data.city.location.latitude,
        lng: data.city.location.longitude,
        zoom: data.city.location.zoom
      },
      name: data.city.name
    },
    description: data.description,
    goods: data.goods,
    host: {
      avatarUrl: data.host[`avatar_url`],
      id: data.host.id,
      isUserPro: data.host[`is_pro`],
      userName: data.host.name
    },
    id: data.id,
    hotelImages: data.images,
    isFavorite: data[`is_favorite`],
    isPremium: data[`is_premium`],
    location: {
      lat: data.location.latitude,
      lng: data.location.longitude,
      zoom: data.location.zoom
    },
    maxAdults: data[`max_adults`],
    previewImage: data[`preview_image`],
    price: data.price,
    rating: data.rating,
    title: data.title,
    type: data.type
  };
};

export const adaptOffersData = (data) => {
  return data.map((offerData) => {
    return adaptOfferData(offerData);
  });
};
