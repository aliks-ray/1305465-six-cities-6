import React, {useState} from "react";
import Header from "../header/header.jsx";
import CardsList from "../cards-list/cards-list.jsx";
import PropTypes from "prop-types";
import {offerType} from "../../prop-types/prop-types.js";
import Map from "../map/map.jsx";
import {baseCoords} from "../../consts/consts.js";
import {sortOffers} from "../../utils/utils.js";
import {connect} from "react-redux";
import {setCity} from "../../store/actions.js";
import {Cities} from "../../consts/consts.js";
import CitiesList from "../cities-list/cities-list.jsx";
import Sorting from "../sorting/sorting.jsx";

const MainPage = ({
  adCount,
  offersInCurrentCity,
  currentCityName,
  onSetCity,
  sortedOffers
}) => {
  const [currentOfferId, setCurrentOfferId] = useState(null);

  const handleMouseEnter = (offer) => {
    setCurrentOfferId(offer.id);
  };
  const handleMouseLeave = () => {
    setCurrentOfferId(null);
  };

  const offersToShow = sortedOffers.slice(0, adCount);

  return (
    <div className="page page--gray page--main">
      <Header />
      <main className="page__main page__main--index">
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
          <div className="cities__places-container container">
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              <b className="places__found">
                {`${offersInCurrentCity.length} places to stay in ${currentCityName}`}
              </b>
              <Sorting />
              <CardsList
                offers={offersToShow}
                cardType="main"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              />
            </section>
            <div className="cities__right-section">
              <section className="cities__map map">
                <Map
                  baseCoords={baseCoords}
                  offers={offersToShow}
                  currentOfferId={currentOfferId}
                />
              </section>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

MainPage.propTypes = {
  adCount: PropTypes.number.isRequired,
  offersInCurrentCity: PropTypes.arrayOf(offerType).isRequired,
  currentCityName: PropTypes.oneOf(Object.values(Cities)),
  onSetCity: PropTypes.func.isRequired,
  sortedOffers: PropTypes.arrayOf(offerType).isRequired,
  onSetActiveOffer: PropTypes.func
};

const mapStateToProps = (state) => ({
  offersInCurrentCity: state.offers.filter(
      (offer) => offer.city === state.currentCityName
  ),
  currentCityName: state.currentCityName,
  adCount: state.adCount,
  sortedOffers: sortOffers(
      state.offers.filter((offer) => offer.city === state.currentCityName),
      state.activeSorting
  )
});

const mapDispatchToProps = (dispatch) => {
  return {
    onSetCity: (cityName) => dispatch(setCity(cityName))
  };
};

export {MainPage};
export default connect(mapStateToProps, mapDispatchToProps)(MainPage);
