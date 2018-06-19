import React from 'react';
import PropTypes from 'prop-types';
import './input.css';

function Input(props) {
  const handleChangeValidate = (e) => {
    const property = e.target.name;
    const handleValue = e.target.value;
    const regex = /^(([^<>()\]\\.,;:\s@"]+(\.[^<>()\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (handleValue.trim() === '') {
      return;
    }
    if (props.type === 'email' && !regex.test(handleValue)) {
      return;
    }
    if (props.minLength && handleValue.length < props.minLength) {
      return;
    }
    if (props.maxLength && handleValue.length > props.maxLength) {
      return;
    }

    props.getInputValues(property, handleValue);
  };

  return (
    <div className="div-submit">
      <label htmlFor={props.id}>
        {props.label}
      </label>
      <input
        className="input-submit"
        type={props.type}
        name={props.name}
        id={props.id}
        minLength={props.minLength}
        maxLength={props.maxLength}
        required
        onChange={handleChangeValidate}
      />
    </div>
  );
}

Input.propTypes = {
  getInputValues: PropTypes.func,
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  minLength: PropTypes.string,
  maxLength: PropTypes.string,
};

Input.defaultProps = {
  getInputValues: () => {},
  minLength: '',
  maxLength: '',
};

export default Input;
