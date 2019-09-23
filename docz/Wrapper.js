import React from 'react';
import { node } from 'prop-types';
import GlobalStyle from './GlobalStyle';

const propTypes = {
  children: node.isRequired,
};

const Wrapper = ({ children }) => (
  <>
    <GlobalStyle />
    {children}
  </>
);

Wrapper.propTypes = propTypes;

export default Wrapper;
