import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, Route } from 'react-router-dom';
import Demo from './Demo';
import '../src/tachyons/tachyons.scss';

const render = () => {
  ReactDOM.render(
    <HashRouter>
      <Route path="/" component={Demo} />
    </HashRouter>,
    document.getElementById('demo'),
  );
};

render(Demo);
