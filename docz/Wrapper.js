import React from 'react';
import { node } from 'prop-types';
import { ThemeProvider } from 'styled-components';
import ButtonProvider from '../src/components/Button/ButtonProvider';
import theme from '../src/theme/theme';

const propTypes = {
  children: node.isRequired,
};

const Wrapper = ({ children }) => (
  <ThemeProvider theme={theme}>
    <ButtonProvider>
      <div>{children}</div>
    </ButtonProvider>
  </ThemeProvider>
);

Wrapper.propTypes = propTypes;

export default Wrapper;
