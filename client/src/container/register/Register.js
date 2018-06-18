import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Input from '../../components/input/Input';
import Button from '../../components/button/Button';
import './register.css';

class Register extends Component {
  getUser = (user) => {
    this.setState({
      user: {
        email: user.email,
        password: user.password,
      },
    });
  }

  handleSubmit = () => {
    this.props.onLoginClick(this.state.user);
    this.props.history.push('/');
  }

  render() {
    return (
      <div className="body">
        <form className="form-submit" onSubmit={this.handleSubmit}>
          <h1>Cadastrar</h1>

          <Input
            label="Nome:"
            type="text"
            name="name"
            id="name"
            minLength="6"
            getUser={this.getUser}
          />

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

          <Input
            label="Confirmar senha:"
            type="password"
            name="password"
            id="password"
            minLength="6"
            maxLength="10"
            getUser={this.getUser}
          />

          <Button>Entrar</Button>
        </form>

        <Link to="/">
          <p>Voltar para a página inicial.</p>
        </Link>
      </div>
    );
  }
}

Register.propTypes = {
  onLoginClick: PropTypes.func.isRequired,
  history: PropTypes.object.isRequired,
};

export default Register;
