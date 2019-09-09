import React from 'react';
import { bool } from 'prop-types';

import StyledCheckBox from './StyledCheckBox';

const propTypes = {
  /** invalid flag */
  invalid: bool,
};

const defaultProps = {
  invalid: false,
};

const CheckBox = props => <StyledCheckBox {...props} />;

CheckBox.propTypes = propTypes;
CheckBox.defaultProps = defaultProps;

export default CheckBox;
