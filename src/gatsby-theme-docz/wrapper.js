/* eslint-disable */
import React from 'react';
import { ThemeProvider } from 'styled-components';
import theme from '../../../src/theme/theme';

const Wrapper = ({ children }) => (
  <ThemeProvider theme={theme}>
    <div>{children}</div>
  </ThemeProvider>
);

export default Wrapper;
