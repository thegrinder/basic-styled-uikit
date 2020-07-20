import React from 'react';
import { bool } from 'prop-types';

import StyledSelect from './StyledSelect';

const propTypes = {
  /** invalid flag */
  invalid: bool,
};

const defaultProps = {
  invalid: false,
};

const Select = (props) => <StyledSelect {...props} />;

Select.propTypes = propTypes;
Select.defaultProps = defaultProps;

export default Select;
