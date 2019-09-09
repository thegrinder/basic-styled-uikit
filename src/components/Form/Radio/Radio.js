import React from 'react';
import { bool } from 'prop-types';
import StyledRadio from './StyledRadio';

const propTypes = {
  /** invalid flag */
  invalid: bool,
};

const Radio = ({ invalid = false, ...rest }) => (
  <StyledRadio invalid={invalid} {...rest} />
);

Radio.propTypes = propTypes;

export default Radio;
