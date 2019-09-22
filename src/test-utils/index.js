/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { node } from 'prop-types';
import { TypographyProvider } from '../components/Typography';
import { BoxProvider } from '../components/Box';

const propTypes = {
  children: node.isRequired,
};

const Wrapper = ({ children }) => (
  <BoxProvider>
    <TypographyProvider>
      <>{children}</>
    </TypographyProvider>
  </BoxProvider>
);

Wrapper.propTypes = propTypes;

const customRender = (ui, options) =>
  render(ui, { wrapper: Wrapper, ...options });

export { customRender as render, fireEvent };
