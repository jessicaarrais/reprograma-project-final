import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Button from '../../components/button/Button';
import './home.css';

class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {
      latitude: '',
      longitude: '',
      timeOut: null,
    };
  }

  handleSubmit = (e) => {
    e.preventDefault();

    navigator.geolocation.getCurrentPosition(location => {
      this.setState({
        latitude: (location.coords.latitude).toPrecision(5),
        longitude: (location.coords.longitude).toPrecision(5),
      }, () => {
        if ('-23.562' === this.state.latitude && '-46.654' === this.state.longitude) {
          console.log('confirmado');
          this.props.history.push('/confirmacao');
        } else {
          alert('Você nao está na EH! =p');
          console.log(this.state.latitude, this.state.longitude);
        }
      });
    });
  }

  render() {
    return (
      <div className="body">
        <form className="form-submit" onSubmit={this.handleSubmit}>
          <h1>Marcar presença</h1>
          <Button>Confirmar</Button>
        </form>

        <div className="card-links">
          <p>Dê uma olhadinha na agenda e nos nossos links úteis!!</p>
          <Button>Só clicar aqui!</Button>
        </div>

        <Link to="/" onClick={this.props.onLogoffClick}>
          <p>"Sair >> Até a próxima! o/"</p>
        </Link>
      </div>

    );
  }
}

Home.propTypes = {
  history: PropTypes.object.isRequired,
};

export default Home;
