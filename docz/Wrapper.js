import React from 'react';
import { node } from 'prop-types';
import { ThemeProvider } from 'styled-components';
import { ModeProvider } from '../src/components/Mode';
import { TypographyProvider } from '../src/components/Typography';
import ButtonProvider from '../src/components/Button/ButtonProvider';
import theme from '../src/theme/theme';

const propTypes = {
  children: node.isRequired,
};

const Wrapper = ({ children }) => (
  <ModeProvider>
    <ThemeProvider theme={theme}>
      <TypographyProvider>
        <ButtonProvider>
          <div>{children}</div>
        </ButtonProvider>
      </TypographyProvider>
    </ThemeProvider>
  </ModeProvider>
);

Wrapper.propTypes = propTypes;

export default Wrapper;
