import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './input.css';

class Input extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {
        name: '',
        email: '',
        password: '',
      },
    };
  }

  handleChange = (e) => {
    const property = e.target.name;
    const value = e.target.value;
    const target = {
      [property]: value,
    };

    this.setState({
      user: {
        target,
      },
    });

    console.log(target);

    this.props.getUser(this.state.user);
  }

  render() {
    return (
      <div className="div-submit">
        <label htmlFor={this.props.id}>
          {this.props.label}
        </label>
        <input
          className="input-submit"
          type={this.props.type}
          name={this.props.name}
          id={this.props.id}
          minLength={this.props.minLength}
          maxLength={this.props.maxLength}
          required
          onChange={this.handleChange}
        />
      </div>
    );
  }
}

Input.propTypes = {
  getUser: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  minLength: PropTypes.string,
  maxLength: PropTypes.string,
};

Input.defaultProps = {
  minLength: '',
  maxLength: '',
};

export default Input;
