import React from 'react';
import { node } from 'prop-types';
import { ThemeProvider } from 'styled-components';
import theme from '../src/theme/theme';

const propTypes = {
  children: node.isRequired,
};

const Wrapper = ({ children }) => (
  <ThemeProvider theme={theme}>
    <div>{children}</div>
  </ThemeProvider>
);

Wrapper.propTypes = propTypes;

export default Wrapper;
