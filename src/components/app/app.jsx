import React from "react";
import MainPage from "../main/main.jsx";
import FavoritesPage from "../favorites/favorites.jsx";
import LoginPage from "../login/login.jsx";
import OfferPage from "../offer/offer.jsx";
import NotFoundPage from "../page404/page404.jsx";
import PropTypes from "prop-types";
import {BrowserRouter, Route, Switch} from "react-router-dom";

const App = ({adCount}) => (
  <BrowserRouter>
    <Switch>
      <Route path="/" exact>
        <MainPage adCount={adCount} />
      </Route>
      <Route path="/login" exact>
        <LoginPage />
      </Route>
      <Route path="/favorites" exact>
        <FavoritesPage />
      </Route>
      <Route path="/offer/:id" exact>
        <OfferPage />
      </Route>
      <Route>
        <NotFoundPage />
      </Route>
    </Switch>
  </BrowserRouter>
);

App.propTypes = {
  adCount: PropTypes.number.isRequired
};

export default App;
