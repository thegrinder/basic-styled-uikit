import React from 'react';
import styled from 'styled-components';
import { bool } from 'prop-types';
import { commonInputStyles } from '../commonFormStyles';
import { inputDisabledStyle } from '../formHelpers';
import { rem } from '../../../helpers/utils';

const propTypes = {
  /** invalid flag */
  invalid: bool,
};


const StyledSelect = styled.select`
${commonInputStyles}
text-transform: none;
padding: 0 ${rem(10)};
vertical-align: middle;
display: inline-block;
height: ${rem(40)};
background-color: #fff;
&:disabled {
  ${inputDisabledStyle}
}
`;

StyledSelect.propTypes = propTypes;

const defaultProps = {
  invalid: false,
};

const Select = props => <StyledSelect {...props} />;

Select.propTypes = propTypes;
Select.defaultProps = defaultProps;

export default Select;
