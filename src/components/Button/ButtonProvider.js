import React from 'react';
import { object } from 'prop-types';
import { ThemeProvider } from 'styled-components';

import buttonTheme from './buttonTheme';

const propTypes = {
  theme: object,
};

const ButtonProvider = ({ theme = {}, ...rest }) => (
  <ThemeProvider theme={{ button: { ...buttonTheme, ...theme } }} {...rest} />
);

ButtonProvider.propTypes = propTypes;

export default ButtonProvider;
