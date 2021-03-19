import React from "react";
import {Link} from "react-router-dom";
import {connect} from "react-redux";
import PropTypes from "prop-types";
import {AuthorizationStatus} from "../../../consts/consts.js";

const Header = ({authInfo, authorizationStatus}) => {
  const isUserAuthorized = authorizationStatus === AuthorizationStatus.AUTH;

  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__left">
            <Link className="header__logo-link" to="/">
              <img
                className="header__logo"
                src="img/logo.svg"
                alt="6 cities logo"
                width={81}
                height={41}
              />
            </Link>
          </div>
          <nav className="header__nav">
            <ul className="header__nav-list">
              <li className="header__nav-item user">
                <Link
                  className="header__nav-link header__nav-link--profile"
                  to={isUserAuthorized && authInfo.id ? `/favorites` : `/login`}
                >
                  <div className="header__avatar-wrapper user__avatar-wrapper">
                    {isUserAuthorized && authInfo.avatarUrl ? (
                      <img
                        src={authInfo.avatarUrl}
                        width={20}
                        height={20}
                        alt="User avatar"
                      />
                    ) : (
                      ``
                    )}
                  </div>
                  {isUserAuthorized && authInfo.avatarUrl ? (
                    <span className="header__user-name user__name">
                      {authInfo.email}
                    </span>
                  ) : (
                    `Sign in`
                  )}
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

Header.propTypes = {
  authInfo: PropTypes.shape({
    avatarUrl: PropTypes.string,
    email: PropTypes.string,
    id: PropTypes.number,
    isPro: PropTypes.bool,
    name: PropTypes.string
  }),
  authorizationStatus: PropTypes.string.isRequired
};

const mapStateToProps = (state) => ({
  authInfo: state.authInfo,
  authorizationStatus: state.authorizationStatus
});

export default connect(mapStateToProps, null)(Header);
