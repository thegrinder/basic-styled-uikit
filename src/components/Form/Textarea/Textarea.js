import React from 'react';
import { bool } from 'prop-types';

import StyledTextarea from './StyledTextarea';

const propTypes = {
  /** invalid flag */
  invalid: bool,
};

const defaultProps = {
  invalid: false,
};

const Textarea = props => <StyledTextarea {...props} />;

Textarea.propTypes = propTypes;
Textarea.defaultProps = defaultProps;

export default Textarea;
