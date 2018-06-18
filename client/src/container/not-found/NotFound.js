import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../../components/button/Button';
import gif from './giphy.gif';
import './not-found.css';

function NotFound() {
  return (
    <div className="body">
      <div className="not-found">
        <h1>Oops! Página não encontrada!</h1>
        <img src={gif} alt="gif de pessoa triste" />
        <Link to="/">
          <Button>Voltar para a página inicial.</Button>
        </Link>
      </div>
    </div>
  );
}

export default NotFound;
