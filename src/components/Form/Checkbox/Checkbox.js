import React from 'react';
import { bool } from 'prop-types';

import StyledCheckbox from './StyledCheckbox';

const propTypes = {
  /** invalid flag */
  invalid: bool,
};

const defaultProps = {
  invalid: false,
};

const Checkbox = (props) => <StyledCheckbox {...props} />;

Checkbox.propTypes = propTypes;
Checkbox.defaultProps = defaultProps;

export default Checkbox;
