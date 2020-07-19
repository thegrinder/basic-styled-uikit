import React from 'react';
import { bool } from 'prop-types';
import StyledRadio from './StyledRadio';

const propTypes = {
  /** invalid flag */
  invalid: bool,
};

const defaultProps = {
  invalid: false,
};

const Radio = props => <StyledRadio {...props} />;

Radio.propTypes = propTypes;
Radio.defaultProps = defaultProps;

export default Radio;
