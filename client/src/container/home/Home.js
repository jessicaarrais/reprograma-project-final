import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Button from '../../components/button/Button';
import '../login/login.css';

class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {
      latutude: '',
      longitude: '',
    };
  }

  handleSubmit = e => {
    e.preventDefault();
    navigator.geolocation.getCurrentPosition(location => {

      this.setState({
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
      });
      console.log(location.coords.latitude);
      console.log(location.coords.longitude);
      console.log(location.coords.accuracy);
    });
    if (-23.5627 === this.state.latitude && -46.6546 === this.state.longitude) {
      console.log('confirmado');
    } else {
      alert('Você nao está na EH! =p');
      console.log(this.state.latitude, this.state.longitude);
    }
    console.log(this.props.userIsLogged);
  }

  render() {
    return (
      <div className="body">
      <form className="form-submit" method="get" onSubmit={this.handleSubmit}>
        <h1>Marcar presença</h1>

        <Button>Confirmar</Button>
      </form>

      <Link to="/" onClick={this.props.onLogoffClick}>
        <p>{"Sair >> Até a próxima! o/"}</p>
      </Link>
      </div>
    );
  }
}

export default Home;
