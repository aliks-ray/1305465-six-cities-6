import React from "react";
import MainPage from "../pages/main/main.jsx";
import FavoritesPage from "../pages/favorites/favorites.jsx";
import LoginPage from "../pages/login/login.jsx";
import OfferPage from "../pages/offer/offer.jsx";
import NotFoundPage from "../pages/page404/page404.jsx";
import PropTypes from "prop-types";
import {Router, Route, Switch} from "react-router-dom";
import {offerType} from "../../prop-types/prop-types.js";
import PrivateRoute from "../private-route/private-route.jsx";
import browserHistory from "../../browser-history.js";

const App = ({offers}) => {
  return (
    <Router history={browserHistory}>
      <Switch>
        <Route path="/" exact>
          <MainPage offers={offers} />
        </Route>
        <Route path="/login" exact>
          <LoginPage />
        </Route>
        <PrivateRoute
          exact
          path="/favorites"
          render={() => <FavoritesPage offers={offers} />}
        />
        <Route exact path="/offer/:id" component={OfferPage}></Route>
        <Route>
          <NotFoundPage />
        </Route>
      </Switch>
    </Router>
  );
};

App.propTypes = {
  offers: PropTypes.arrayOf(offerType).isRequired
};

export default App;
