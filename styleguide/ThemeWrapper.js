import React from 'react';
import { ThemeProvider } from 'styled-components';
import { theme } from '../src';

const ThemeWrapper = ({ children }) => (
  <ThemeProvider theme={theme}>
    {children}
  </ThemeProvider>
);

export default ThemeWrapper;
