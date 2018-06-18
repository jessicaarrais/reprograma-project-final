import React from 'react';
import PropTypes from 'prop-types';
import './button.css';

function Button(props) {
  return (
    <button className="btn-submit">
      {props.children}
    </button>
  );
}

Button.propTypes = {
  children: PropTypes.string.isRequired,
};

export default Button;
