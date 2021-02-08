import React, {Fragment} from "react";
import {Link} from "react-router-dom";

const NotFoundPage = () => {
  return (
    <Fragment>
      <h1>
        Error 404.
        <br />
        <small>This page is not found</small>
      </h1>
      <Link to="/">Please go to the main page</Link>
    </Fragment>
  );
};

export default NotFoundPage;
