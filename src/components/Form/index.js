/* eslint-disable import/no-duplicates */
/* eslint-disable react/no-unused-state */
// eslint-disable-next-line prettier/prettier

import React from "react";
import PropTypes from "prop-types";
import { FaPlus } from "react-icons/fa";

import "./form.css";

export default function Form({ handleChange, handleSubmit, novaTarefa }) {
  return (
    <form onSubmit={handleSubmit} action="#" className="form">
      <input onChange={handleChange} type="text" value={novaTarefa} />
      <button type="submit">
        <FaPlus />
      </button>
    </form>
  );
}

// Form.defaultProps = {
//   novaTarefa: ''
// }

Form.propTypes = {
  handleChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  novaTarefa: PropTypes.string.isRequired,
};
