import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import Demo from './Demo';
import './global-styles';
import '../src/tachyons/tachyons';

const render = (Component) => {
  ReactDOM.render(
    <AppContainer>
      <Component />
    </AppContainer>,
    document.getElementById('demo'),
  );
};

render(Demo);

if (module.hot) {
  module.hot.accept('./Demo', () => {
    render(Demo);
  });
}
