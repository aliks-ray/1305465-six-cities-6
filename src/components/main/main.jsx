import React, {useState} from "react";
import Header from "../header/header.jsx";
import CardsList from "../cards-list/cards-list.jsx";
import PropTypes from "prop-types";
import {offerType} from "../../prop-types/prop-types.js";
import Map from "../map/map.jsx";
import {baseCoords} from "../../consts/consts.js";
import {connect} from "react-redux";
import {ActionCreator} from "../../store/actions.js";
import {Cities} from "../../consts/consts.js";
import CitiesList from "../cities-list/cities-list.jsx";

const MainPage = ({
  adCount,
  offersInCurrentCity,
  currentCityName,
  onSetCity
}) => {
  const [activeOfferId, setActiveOfferId] = useState(null);

  const onChangeActiveOffer = (id) => {
    setActiveOfferId(id);
  };

  const offersToShow = offersInCurrentCity.slice(0, adCount);

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
              <form className="places__sorting" action="#" method="get">
                <span className="places__sorting-caption">Sort by</span>
                <span className="places__sorting-type" tabIndex={0}>
                  Popular
                  <svg className="places__sorting-arrow" width={7} height={4}>
                    <use xlinkHref="#icon-arrow-select" />
                  </svg>
                </span>
                <ul className="places__options places__options--custom places__options--opened">
                  <li
                    className="places__option places__option--active"
                    tabIndex={0}
                  >
                    Popular
                  </li>
                  <li className="places__option" tabIndex={0}>
                    Price: low to high
                  </li>
                  <li className="places__option" tabIndex={0}>
                    Price: high to low
                  </li>
                  <li className="places__option" tabIndex={0}>
                    Top rated first
                  </li>
                </ul>
              </form>
              <CardsList
                offers={offersToShow}
                cardType="main"
                onChangeActiveOffer={onChangeActiveOffer}
              />
            </section>
            <div className="cities__right-section">
              <section className="cities__map map">
                <Map
                  baseCoords={baseCoords}
                  offers={offersToShow}
                  activeOfferId={activeOfferId}
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
  onSetCity: PropTypes.func.isRequired
};

const mapStateToProps = (state) => ({
  offersInCurrentCity: state.offers.filter(
      (offer) => offer.city === state.currentCityName
  ),
  currentCityName: state.currentCityName,
  adCount: state.adCount
});

const mapDispatchToProps = (dispatch) => ({
  onSetCity(cityName) {
    dispatch(ActionCreator.setCity(cityName));
  }
});

export {MainPage};
export default connect(mapStateToProps, mapDispatchToProps)(MainPage);
