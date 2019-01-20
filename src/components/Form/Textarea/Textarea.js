import React from 'react';
import styled from 'styled-components';
import { bool } from 'prop-types';
import { commonInputStyles } from '../commonFormStyles';
import { rem } from '../../../helpers/utils';

const propTypes = {
  /** invalid flag */
  invalid: bool,
};

const StyledTextarea = styled.textarea`
${commonInputStyles}
padding: ${rem(4)} ${rem(10)};
vertical-align: top;
overflow: auto;
`;

StyledTextarea.propTypes = propTypes;

const defaultProps = {
  invalid: false,
};

const Textarea = props => <StyledTextarea {...props} />;

Textarea.propTypes = propTypes;
Textarea.defaultProps = defaultProps;

export default Textarea;
