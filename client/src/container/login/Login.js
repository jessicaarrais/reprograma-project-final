import React, { Component } from 'react';
import PropTypes from 'prop-types';
import 'whatwg-fetch';
import { Link } from 'react-router-dom';
import Input from '../../components/input/Input';
import Button from '../../components/button/Button';
import './login.css';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: null,
      password: null,
      erro: null,
    };
  }

  getInputValues = (property, handleValue) => {
    this.setState({
      [property]: handleValue,
    });
  }

  handleSubmit = () => {
    // TODO SEARCH USER ON THE DATABASE
    fetch('http://localhost:3001/api/user')
      .then(res => res.json())
      .then(res => res.find((user) => {
        if (!(user.email === this.state.email) && !(user.password === this.state.password)) {
          console.log(user);
          this.setState({ erro: res.error });
        }
        this.props.onLoginClick(this.state.email, this.state.password);
        this.props.history.push('/');
        return user;
      })).catch((err) => {
        console.log('erro login', err);
      });
  }

  render() {
    return (
      <div className="body">
        {this.state.erro && <p>{this.state.erro}</p>}
        <form className="form-submit" onSubmit={this.handleSubmit}>
          <h1>Login</h1>
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
