import React from "react";
import Header from "../header/header.jsx";
import Footer from "../footer/footer.jsx";
import PropTypes from "prop-types";
import FavoriteCard from "../favorite-card/favorite-card.jsx";

const FavoritesPage = ({offers}) => {
  const favoritesOffers = offers
    .filter((offer) => offer.isFavorite === true)
    .reduce(function (result, item) {
      result[item.city] = [...(result[item.city] || []), item];
      return result;
    }, {});
  return (
    <div className="page">
      <Header />
      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
          <section className="favorites">
            <h1 className="favorites__title">Saved listing</h1>
            <ul className="favorites__list">
              {Object.keys(favoritesOffers).map((cityKey) => (
                <li className="favorites__locations-items" key={cityKey}>
                  <div className="favorites__locations locations locations--current">
                    <div className="locations__item">
                      <a className="locations__item-link" href="#">
                        <span>{cityKey}</span>
                      </a>
                    </div>
                  </div>
                  <div className="favorites__places">
                    {Object.values(favoritesOffers).map((city) =>
                      city.map((offer) =>
                        offer.city === cityKey ? (
                          <FavoriteCard key={offer.id} offer={offer} />
                        ) : (
                          ``
                        )
                      )
                    )}
                  </div>
                </li>
              ))}
            </ul>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
};

FavoritesPage.propTypes = {
  offers: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
        type: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        rating: PropTypes.number.isRequired,
        previewImage: PropTypes.string.isRequired,
        isFavorite: PropTypes.bool.isRequired,
        isPremium: PropTypes.bool.isRequired,
        city: PropTypes.string.isRequired
      })
  )
};

export default FavoritesPage;
