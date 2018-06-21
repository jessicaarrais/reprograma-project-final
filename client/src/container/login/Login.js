import React, { Component } from 'react';
import PropTypes from 'prop-types';
import 'whatwg-fetch';
import { Link } from 'react-router-dom';
import Input from '../../components/input/Input';
import Button from '../../components/button/Button';
import './login.css';

let resp;

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: null,
      password: null,
      data: [],
      error: '',
    };
  }

  getInputValues = (property, handleValue) => {
    this.setState({
      [property]: handleValue,
    });
  }

  handleSubmit = () => {
    this.fetchURL('http://localhost:3001/api/user');
    console.log(resp);
    if (resp) {
      this.props.onLoginClick(this.state.email, this.state.password);
    }
    this.props.history.push('/');
  }

  fetchURL = (url) => {
    // TODO SEARCH USER ON THE DATABASE
    fetch(url)
      .then(res => res.json())
      .then((res) => {
        resp = res.data.find(user => (
          user.email === this.state.email && user.password === this.state.password
        ));
      })
      .catch((err) => {
        console.log('erro login', err);
      });
    console.log('was the user founded?', resp);
  }

  loadCommentsFromServer = () => {
    fetch('http://localhost:3001/api/user')
      .then(data => data.json())
      .then((res) => {
        if (!res.success) this.setState({ error: res.error });
        else this.setState({ data: res.data });
      });
    console.log(this.state.error, this.state.data);
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
