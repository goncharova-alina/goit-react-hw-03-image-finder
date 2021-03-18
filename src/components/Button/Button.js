import React from "react";
import PropTypes from "prop-types";
import "./Button.css";

const Button = ({ fetchImages }) => {
  return (
    <button type="button" onClick={fetchImages} className="Button">
      Load more...
    </button>
  );
};
Button.propTypes = {
  onClick: PropTypes.func,
};
export default Button;
