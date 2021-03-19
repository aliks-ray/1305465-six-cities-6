import React from "react";
import MainPage from "../pages/main/main.jsx";
import FavoritesPage from "../pages/favorites/favorites.jsx";
import LoginPage from "../pages/login/login.jsx";
import OfferPage from "../pages/offer/offer.jsx";
import NotFoundPage from "../pages/page404/page404.jsx";
import PropTypes from "prop-types";
import {Router, Route, Switch} from "react-router-dom";
import {offerType, reviewType} from "../../prop-types/prop-types.js";
import PrivateRoute from "../private-route/private-route.jsx";
import browserHistory from "../../browser-history.js";

const App = ({adCount, offers, reviews}) => (
  <Router history={browserHistory}>
    <Switch>
      <Route path="/" exact>
        <MainPage adCount={adCount} offers={offers} />
      </Route>
      <Route path="/login" exact>
        <LoginPage />
      </Route>
      <PrivateRoute
        exact
        path="/favorites"
        render={() => <FavoritesPage offers={offers} />}
      />
      <Route path="/offer/:id" exact>
        <OfferPage offers={offers} reviews={reviews} />
      </Route>
      <Route>
        <NotFoundPage />
      </Route>
    </Switch>
  </Router>
);

App.propTypes = {
  adCount: PropTypes.number.isRequired,
  offers: PropTypes.arrayOf(offerType).isRequired,
  reviews: PropTypes.arrayOf(reviewType).isRequired
};

export default App;
