import React from 'react';
import styled from 'styled-components';
import { bool } from 'prop-types';
import { getSharedMiscInputStyles } from '../commonFormStyles';
import { rem } from '../../../theme/typography';

const propTypes = {
  /** invalid flag */
  invalid: bool,
};

const StyledCheckbox = styled.input(({ theme, invalid }) => ({
  ...getSharedMiscInputStyles(theme, invalid),
  borderRadius: rem(theme, 4),
  position: 'relative',
  '&::after': {
    content: '""',
    position: 'absolute',
    borderBottom: '2px solid #fff',
    borderLeft: '2px solid #fff',
    top: '20%',
    left: 0,
    right: 0,
    margin: 'auto',
    width: '50%',
    height: '25%',
    transform: 'rotate(-50deg)',
  },
}));

StyledCheckbox.propTypes = propTypes;

const defaultProps = {
  invalid: false,
};

const Checkbox = props => (
  <StyledCheckbox type="checkbox" {...props} />
);

Checkbox.propTypes = propTypes;
Checkbox.defaultProps = defaultProps;

export default Checkbox;
