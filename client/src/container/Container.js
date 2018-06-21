import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Navbar from '../components/navbar/Navbar';
import Home from './home/Home';
import Login from './login/Login';
import Register from './register/Register';
import Confirmation from './confirmation/Confirmation';
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

  onLoginClick = (email, password, name = null) => {
    this.setState({ userIsLogged: true });
    console.log('current user', this.state.userIsLogged, name, email, password);
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
            render={(props) => {
              if (this.state.userIsLogged) {
                return (
                  <Home
                    userIsLogged={this.state.userIsLogged}
                    onLogoffClick={this.onLogoffClick}
                    history={props.history}
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
                onLogoffClick={this.onLogoffClick}
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
          <Route
            path="/confirmacao"
            render={() => (
              <Confirmation
                onLogoffClick={this.onLogoffClick}
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
