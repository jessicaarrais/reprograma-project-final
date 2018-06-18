import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Input from '../../components/input/Input';
import Button from '../../components/button/Button';
import './login.css';

class Login extends Component {
  getUser = user => user

  handleSubmit = () => {
    this.props.onLoginClick();
    this.props.history.push('/');
  }

  render() {
    return (
      <div className="body">
        <form className="form-submit" onSubmit={this.handleSubmit}>
          <h1>Login</h1>
          <Input
            label="Email:"
            type="email"
            name="email"
            id="email"
            getUser={this.getUser}
          />

          <Input
            label="Senha:"
            type="password"
            name="password"
            id="password"
            minLength="6"
            maxLength="10"
            getUser={this.getUser}
          />

          <Button>Entrar</Button>
        </form>

        <Link to="/cadastrar">
          <p>Cadastre-se para fazer parte!</p>
        </Link>
      </div>
    );
  }
}

Login.propTypes = {
  onLoginClick: PropTypes.func.isRequired,
  history: PropTypes.object.isRequired,
};

export default Login;
