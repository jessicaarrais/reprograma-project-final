import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Navbar from '../components/navbar/Navbar';
import Home from './home/Home';
import Login from './login/Login';
import Register from './register/Register';
import NotFound from './not-found/NotFound';
import Footer from '../components/footer/Footer';
import './Container.css';

class Container extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userIsLogged: false,
    };
  }

  onLoginClick = (user) => {
    console.log('prev', this.state.userIsLogged);
    this.setState({ userIsLogged: true });
    console.log('current', this.state.userIsLogged, user);
  }

  onLogoffClick = () => {
    this.setState({ userIsLogged: false });
    console.log('logoff', this.state.userIsLogged);
  }

  render() {
    return (
      <div className="container">
        <Navbar />
        <Switch>
          <Route
            exact
            path="/"
            render={() => {
              if (this.state.userIsLogged) {
                return (
                  <Home
                    userIsLogged={this.state.userIsLogged}
                    onLogoffClick={this.onLogoffClick}
                  />
                );
              }
              return <Redirect to="/login" />;
            }}
          />
          <Route
            path="/login"
            render={props => (
              <Login
                userIsLogged={this.state.userIsLogged}
                onLoginClick={this.onLoginClick}
                history={props.history}
              />
            )}
          />
          <Route
            path="/cadastrar"
            render={props => (
              <Register
                userIsLogged={this.state.userIsLogged}
                onLoginClick={this.onLoginClick}
                history={props.history}
              />
            )}
          />
          <Route component={NotFound} />
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default Container;
