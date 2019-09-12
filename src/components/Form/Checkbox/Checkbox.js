import React from 'react';
import { bool } from 'prop-types';

import StyledCheckbox from './StyledCheckbox';

const propTypes = {
  /** invalid flag */
  invalid: bool,
};

const Checkbox = ({ invalid = false, ...rest }) => (
  <StyledCheckbox invalid={invalid} {...rest} />
);

Checkbox.propTypes = propTypes;

export default Checkbox;
