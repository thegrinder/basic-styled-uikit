import React from 'react';
import styled from 'styled-components';
import { bool } from 'prop-types';

import { getSharedInputStyles } from '../commonFormStyles';
import { rem } from '../../../theme/typography';

const propTypes = {
  /** invalid flag */
  invalid: bool,
};

const StyledSelect = styled.select(({ theme, invalid }) => ({
  textTransform: 'none',
  padding: `0 ${rem(theme, 10)}`,
  verticalAlign: 'middle',
  display: 'inline-block',
  height: rem(theme, 40),
  backgroundColor: '#fff',
  ...getSharedInputStyles(theme, invalid),
}));

StyledSelect.propTypes = propTypes;

const defaultProps = {
  invalid: false,
};

const Select = props => <StyledSelect {...props} />;

Select.propTypes = propTypes;
Select.defaultProps = defaultProps;

export default Select;
