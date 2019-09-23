import React from 'react';
import { bool } from 'prop-types';

import StyledSelect from './StyledSelect';

const propTypes = {
  /** invalid flag */
  invalid: bool,
};

const Select = ({ invalid = false, ...rest }) => (
  <StyledSelect invalid={invalid} {...rest} />
);

Select.propTypes = propTypes;

export default Select;
