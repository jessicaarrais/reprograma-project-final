import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Input from '../../components/input/Input';
import Button from '../../components/button/Button';
import './register.css';

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: null,
      password: null,
      confirmPassword: null,
      error: null,
    };
  }

  getInputValues = (property, handleValue) => {
    this.setState({
      [property]: handleValue,
    });
  }

  handleSubmit = (e) => {
    if (
      this.state.name !== null &&
      this.state.email !== null &&
      this.state.password !== null &&
      this.confirmPassword !== null
    ) {
      if (this.state.password !== this.state.confirmPassword) {
        e.preventDefault();
        alert('Senhas incompatíveis');
        return;
      }

      // TODO SAVE NEW USER ON THE DATABASE
      const { name, email, password } = this.state;
      fetch('http://localhost:3001/api/user', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, password }),
      }).then(res => res.json()).then((res) => {
        if (!res.success) this.setState({ error: res.error.message || res.error});
        this.setState({ error: null });
        console.log('entrou no fetch do cadastro');
      }).catch((err) => {
        console.log('erro cadastro', err);
      });

      this.props.onLoginClick(this.state.email, this.state.password, this.state.name);
      this.props.history.push('/');
    }
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
            getInputValues={this.getInputValues}
          />

          <Input
            label="Email:"
            type="email"
            name="email"
            id="email"
            getInputValues={this.getInputValues}
          />

          <Input
            label="Senha:"
            type="password"
            name="password"
            id="password"
            minLength="6"
            maxLength="10"
            getInputValues={this.getInputValues}
          />

          <Input
            label="Confirmar senha:"
            type="password"
            name="confirmPassword"
            id="password"
            minLength="6"
            maxLength="10"
            getInputValues={this.getInputValues}
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
