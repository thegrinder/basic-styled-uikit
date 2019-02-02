import React from 'react';
import styled from 'styled-components';
import { bool } from 'prop-types';
import { getSharedInputStyles } from '../commonFormStyles';
import { rem } from '../../../helpers/utils';

const propTypes = {
  /** invalid flag */
  invalid: bool,
};

const StyledInput = styled.input(({ theme, invalid }) => ({
  ...getSharedInputStyles(theme, invalid),
  verticalAlign: 'middle',
  display: 'inline-block',
  height: rem(theme, 40),
  padding: `0 ${rem(theme, 10)}`,
  overflow: 'visible',
}));

StyledInput.propTypes = propTypes;

const defaultProps = {
  invalid: false,
};

const Input = props => <StyledInput {...props} />;

Input.propTypes = propTypes;
Input.defaultProps = defaultProps;


export default Input;
