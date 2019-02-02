import React from 'react';
import styled from 'styled-components';
import { bool } from 'prop-types';
import { getSharedInputStyles } from '../commonFormStyles';
import { rem } from '../../../helpers/utils';

const propTypes = {
  /** invalid flag */
  invalid: bool,
};

const StyledTextarea = styled.textarea(({ theme, invalid }) => ({
  ...getSharedInputStyles(theme, invalid),
  padding: `${rem(theme, 4)} ${rem(theme, 10)}`,
  verticalAlign: 'top',
  overflow: 'auto',
}));

StyledTextarea.propTypes = propTypes;

const defaultProps = {
  invalid: false,
};

const Textarea = props => <StyledTextarea {...props} />;

Textarea.propTypes = propTypes;
Textarea.defaultProps = defaultProps;

export default Textarea;
