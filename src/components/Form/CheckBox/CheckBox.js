import React from 'react';
import { bool } from 'prop-types';

import StyledCheckBox from './StyledCheckBox';

const propTypes = {
  /** invalid flag */
  invalid: bool,
};

const CheckBox = ({ invalid = false, ...rest }) => (
  <StyledCheckBox invalid={invalid} {...rest} />
);

CheckBox.propTypes = propTypes;

export default CheckBox;
