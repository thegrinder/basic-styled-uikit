import React from 'react';
import { ThemeProvider } from 'styled-components';
import theme from '../src/theme/theme';
import { ResetCss } from '../src';

const Wrapper = ({ children }) => (
  <ThemeProvider theme={theme}>
    <div>
      <ResetCss />
      {children}
    </div>
  </ThemeProvider>
);

export default Wrapper;
