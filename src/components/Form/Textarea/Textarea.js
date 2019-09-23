import React from 'react';
import { bool } from 'prop-types';

import StyledTextarea from './StyledTextarea';

const propTypes = {
  /** invalid flag */
  invalid: bool,
};

const Textarea = ({ invalid = false, ...rest }) => (
  <StyledTextarea invalid={invalid} {...rest} />
);

Textarea.propTypes = propTypes;

export default Textarea;
