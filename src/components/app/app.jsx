import React from "react";
import MainPage from "../pages/main/main.jsx";
import FavoritesPage from "../pages/favorites/favorites.jsx";
import LoginPage from "../pages/login/login.jsx";
import OfferPage from "../pages/offer/offer.jsx";
import NotFoundPage from "../pages/page404/page404.jsx";
import {Router, Route, Switch, Redirect} from "react-router-dom";
import PrivateRoute from "../private-route/private-route.jsx";
import browserHistory from "../../browser-history.js";
import {AuthorizationStatus} from "../../consts/consts.js";
import {useSelector} from "react-redux";

const App = () => {
  const {authorizationStatus} = useSelector((state) => state.USER);
  const isUserAuthorized = authorizationStatus === AuthorizationStatus.AUTH;
  return (
    <Router history={browserHistory}>
      <Switch>
        <Route path="/" exact>
          <MainPage />
        </Route>
        <Route path="/login" exact>
          {isUserAuthorized ? <Redirect to={`/`} /> : <LoginPage />}
        </Route>
        <PrivateRoute
          exact
          path="/favorites"
          render={() => <FavoritesPage />}
        />
        <Route exact path="/offer/:id" component={OfferPage}></Route>
        <Route>
          <NotFoundPage />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
