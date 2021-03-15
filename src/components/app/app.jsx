import React from "react";
import MainPage from "../main/main.jsx";
import FavoritesPage from "../favorites/favorites.jsx";
import LoginPage from "../login/login.jsx";
import OfferPage from "../offer/offer.jsx";
import NotFoundPage from "../page404/page404.jsx";
import PropTypes from "prop-types";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import {offerType, reviewType} from "../../prop-types/prop-types.js";
// import PrivateRoute from '../private-route/private-route';
// import {OFFERS} from "../../mocks/offers.js";
// import {REVIEWS} from "../../mocks/reviews.js";

// <PrivateRoute exact
//   path="/"
//   render={() => <MainPage adCount={adCount} offers={offers} />}
// >
// </PrivateRoute>

const App = ({adCount, offers, reviews}) => (
  <BrowserRouter>
    <Switch>
      <Route path="/" exact>
        <MainPage adCount={adCount} offers={offers} />
      </Route>
      <Route path="/login" exact>
        <LoginPage />
      </Route>
      <Route path="/favorites" exact>
        <FavoritesPage offers={offers} />
      </Route>
      <Route path="/offer/:id" exact>
        <OfferPage offers={offers} reviews={reviews} />
      </Route>
      <Route>
        <NotFoundPage />
      </Route>
    </Switch>
  </BrowserRouter>
);

App.propTypes = {
  adCount: PropTypes.number.isRequired,
  offers: PropTypes.arrayOf(offerType).isRequired,
  reviews: PropTypes.arrayOf(reviewType).isRequired
};

export default App;
