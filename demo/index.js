import React from 'react';
import ReactDOM from 'react-dom';
import Demo from './Demo';

const render = () => {
  ReactDOM.render(
    <Demo />,
    document.getElementById('demo'),
  );
};

render(Demo);
