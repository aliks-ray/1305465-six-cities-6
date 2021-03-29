import React, {useState, useEffect} from "react";
import {connect} from "react-redux";
import PropTypes from "prop-types";
import {offerType} from "../../../prop-types/prop-types.js";
import classNames from "classnames";
import {Cities} from "../../../consts/consts.js";
import LoadingScreen from "../../layout/loading-screen/loading-screen.jsx";
import MainEmptyScreen from "../main-empty/main-empty.jsx";
import Header from "../../layout/header/header.jsx";
import CitiesList from "../../layout/cities-list/cities-list.jsx";
import CardsList from "../../cards/cards-list/cards-list.jsx";
import Sorting from "../../cards/sorting/sorting.jsx";
import Map from "../../map/map.jsx";
import {sortOffers} from "../../../utils/utils.js";
import {setCity} from "../../../store/actions.js";
import {fetchOffersList} from "../../../store/api-actions.js";
import {
  getOffers,
  getOffersStatus
} from "../../../store/selectors/load-selectors.js";
import {
  setCurrentCityName,
  setCurrentSorting
} from "../../../store/selectors/set-selectors.js";

const MainPage = ({
  offersInCurrentCity,
  currentCityName,
  onSetCity,
  sortedOffers,
  isOffersLoaded,
  onLoadOffers
}) => {
  const [currentOfferId, setCurrentOfferId] = useState(null);

  useEffect(() => {
    if (!isOffersLoaded) {
      onLoadOffers();
    }
  }, [isOffersLoaded]);

  if (!isOffersLoaded) {
    return <LoadingScreen />;
  }

  const handleMouseEnter = (offer) => {
    setCurrentOfferId(offer.id);
  };
  const handleMouseLeave = () => {
    setCurrentOfferId(null);
  };

  return (
    <div className="page page--gray page--main">
      <Header />
      <main
        className={classNames(`page__main page__main--index`, {
          "page__main page__main--index page__main--index-empty": !offersInCurrentCity
        })}
      >
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <section className="locations container">
            <CitiesList
              currentCityName={currentCityName}
              onSetCity={onSetCity}
            />
          </section>
        </div>
        <div className="cities">
          {!offersInCurrentCity ? (
            <MainEmptyScreen currentCityName={currentCityName} />
          ) : (
            <div className="cities__places-container container">
              <section className="cities__places places">
                <h2 className="visually-hidden">Places</h2>
                <b className="places__found">
                  {`${offersInCurrentCity.length} places to stay in ${currentCityName}`}
                </b>
                <Sorting />
                <CardsList
                  offers={sortedOffers}
                  cardType="main"
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                />
              </section>
              <div className="cities__right-section">
                <section className="cities__map map">
                  <Map offers={sortedOffers} currentOfferId={currentOfferId} />
                </section>
              </div>
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

MainPage.propTypes = {
  offersInCurrentCity: PropTypes.arrayOf(offerType).isRequired,
  currentCityName: PropTypes.oneOf(Object.values(Cities)),
  onSetCity: PropTypes.func.isRequired,
  sortedOffers: PropTypes.arrayOf(offerType).isRequired,
  onSetActiveOffer: PropTypes.func,
  isOffersLoaded: PropTypes.bool.isRequired,
  onLoadOffers: PropTypes.func.isRequired
};

const mapStateToProps = (state) => ({
  offersInCurrentCity: getOffers(state).filter(
      (offer) => offer.city.name === setCurrentCityName(state)
  ),
  currentCityName: setCurrentCityName(state),
  sortedOffers: sortOffers(
      getOffers(state).filter(
          (offer) => offer.city.name === setCurrentCityName(state)
      ),
      setCurrentSorting(state)
  ),
  isOffersLoaded: getOffersStatus(state)
});

const mapDispatchToProps = (dispatch) => {
  return {
    onSetCity: (cityName) => dispatch(setCity(cityName)),
    onLoadOffers: () => dispatch(fetchOffersList())
  };
};

export {MainPage};
export default connect(mapStateToProps, mapDispatchToProps)(MainPage);
