import React from 'react';
import { node } from 'prop-types';
import { ThemeProvider } from 'styled-components';
import { ModeProvider } from '../src/components/Mode';
import ButtonProvider from '../src/components/Button/ButtonProvider';
import theme from '../src/theme/theme';

const propTypes = {
  children: node.isRequired,
};

const Wrapper = ({ children }) => (
  <ModeProvider>
    <ThemeProvider theme={theme}>
      <ButtonProvider>
        <div>{children}</div>
      </ButtonProvider>
    </ThemeProvider>
  </ModeProvider>
);

Wrapper.propTypes = propTypes;

export default Wrapper;
