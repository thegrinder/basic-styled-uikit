import React from 'react';
import { ThemeProvider } from 'styled-components';
import theme from '../src/theme/theme';

const Wrapper = ({ children }) => (
  <ThemeProvider theme={theme}>
    {children}
  </ThemeProvider>
);

export default Wrapper;
