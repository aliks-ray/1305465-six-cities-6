import React from "react";
import MainPage from "../main/main.jsx";
import FavoritesPage from "../favorites/favorites.jsx";
import LoginPage from "../login/login.jsx";
import OfferPage from "../offer/offer.jsx";
import NotFoundPage from "../page404/page404.jsx";
import PropTypes from "prop-types";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import {offerType} from "../../prop-types/prop-types.js";
import {OFFERS} from "../../mocks/offers.js";
import {REVIEWS} from "../../mocks/reviews.js";

const App = ({adCount}) => (
  <BrowserRouter>
    <Switch>
      <Route path="/" exact>
        <MainPage adCount={adCount} offers={OFFERS} />
      </Route>
      <Route path="/login" exact>
        <LoginPage />
      </Route>
      <Route path="/favorites" exact>
        <FavoritesPage offers={OFFERS} />
      </Route>
      <Route path="/offer/:id" exact>
        <OfferPage offers={OFFERS} reviews={REVIEWS} />
      </Route>
      <Route>
        <NotFoundPage />
      </Route>
    </Switch>
  </BrowserRouter>
);

App.propTypes = {
  adCount: PropTypes.number.isRequired,
  offers: PropTypes.arrayOf(offerType).isRequired
};

export default App;
