import React, {useEffect} from "react";
import Header from "../../layout/header/header.jsx";
import Footer from "../../layout/footer/footer.jsx";
import {useDispatch, useSelector} from "react-redux";
import classNames from "classnames";
import FavoriteCard from "../../cards/favorite-card/favorite-card.jsx";
import LoadingScreen from "../../layout/loading-screen/loading-screen.jsx";
import {fetchFavorites} from "../../../store/api-actions.js";

const FavoritesPage = () => {
  const dispatch = useDispatch();
  const {favoriteOffers, isFavoritesLoaded} = useSelector(
      (state) => state.DATA_LOAD
  );
  const groupGyCity = (result, item) => {
    result[item.city.name] = [...(result[item.city.name] || []), item];
    return result;
  };

  const currentFavoritesOffers = favoriteOffers.reduce(groupGyCity, {});

  useEffect(() => {
    dispatch(fetchFavorites());
  }, [isFavoritesLoaded]);

  if (isFavoritesLoaded) {
    return <LoadingScreen />;
  }

  return (
    <div className="page">
      <Header />
      <main
        className={classNames(`page__main page__main--favorites`, {
          "page__main page__main--favorites page__main--favorites-empty":
            favoriteOffers.length === 0
        })}
      >
        <div className="page__favorites-container container">
          {favoriteOffers.length === 0 ? (
            <section className="favorites favorites--empty">
              <h1 className="visually-hidden">Favorites (empty)</h1>
              <div className="favorites__status-wrapper">
                <b className="favorites__status">Nothing yet saved.</b>
                <p className="favorites__status-description">
                  Save properties to narrow down search or plan your future
                  trips.
                </p>
              </div>
            </section>
          ) : (
            <section className="favorites">
              <h1 className="favorites__title">Saved listing</h1>
              <ul className="favorites__list">
                {Object.keys(currentFavoritesOffers).map((cityKey) => (
                  <li className="favorites__locations-items" key={cityKey}>
                    <div className="favorites__locations locations locations--current">
                      <div className="locations__item">
                        <a className="locations__item-link" href="#">
                          <span>{cityKey}</span>
                        </a>
                      </div>
                    </div>
                    <div className="favorites__places">
                      {Object.values(currentFavoritesOffers).map((city) =>
                        city.map(
                            (offer) =>
                              offer.city.name === cityKey && (
                                <FavoriteCard key={offer.id} offer={offer} />
                              )
                        )
                      )}
                    </div>
                  </li>
                ))}
              </ul>
            </section>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default FavoritesPage;
