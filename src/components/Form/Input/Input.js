import React from 'react';
import { bool } from 'prop-types';

import StyledInput from './StyledInput';

const propTypes = {
  /** invalid flag */
  invalid: bool,
};

const Input = ({ invalid = false, ...rest }) => (
  <StyledInput invalid={invalid} {...rest} />
);

Input.propTypes = propTypes;

export default Input;
