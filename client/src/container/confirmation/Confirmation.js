import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Button from '../../components/button/Button';
import gif from './giphy.gif';
import './confirmation.css';

function Confirmation(props) {
  return (
    <div className="body">
      <div className="confirmation">
        <h1>Presença confirmada! Boa aula! =D</h1>
        <img src={gif} alt="gif de pessoa triste" />
        <Link to="/">
          <Button>Voltar para a página inicial.</Button>
        </Link>
      </div>
      <Link to="/" onClick={props.onLogoffClick}>
        <p>{'Sair >> Até a próxima! o/'}</p>
      </Link>
    </div>
  );
}

Confirmation.propTypes = {
  onLogoffClick: PropTypes.func.isRequired,
};

export default Confirmation;
