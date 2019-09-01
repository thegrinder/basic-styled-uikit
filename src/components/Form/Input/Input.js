import React from 'react';
import { bool } from 'prop-types';

import StyledInput from './StyledInput';

const propTypes = {
  /** invalid flag */
  invalid: bool,
};

const defaultProps = {
  invalid: false,
};

const Input = props => <StyledInput {...props} />;

Input.propTypes = propTypes;
Input.defaultProps = defaultProps;

export default Input;
