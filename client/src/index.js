import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import './index.css';
import Container from './container/Container';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <Router>
    <Container />
  </Router>, document.getElementById('root'));
registerServiceWorker();
