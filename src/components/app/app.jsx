import React from "react";
import Main from "../main/main.jsx";
import PropTypes from "prop-types";

const App = (props) => {
  const {adCount} = props;

  return <Main adCount={adCount} />;
};

App.propTypes = {
  adCount: PropTypes.number.isRequired
};

export default App;
