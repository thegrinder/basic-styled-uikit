import React from 'react';
import styled from 'styled-components';
import { bool } from 'prop-types';
import { getSharedMiscInputStyles } from '../commonFormStyles';

const propTypes = {
  /** invalid flag */
  invalid: bool,
};

const StyledRadio = styled.input(({ theme, invalid }) => ({
  ...getSharedMiscInputStyles(theme, invalid),
  borderRadius: '50%',
  position: 'relative',
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    margin: 'auto',
    backgroundColor: '#fff',
    width: '30%',
    height: '30%',
    borderRadius: '50%',
  },
}));

StyledRadio.propTypes = propTypes;

const defaultProps = {
  invalid: false,
};

const Radio = props => (
  <StyledRadio type="radio" {...props} />
);

Radio.propTypes = propTypes;
Radio.defaultProps = defaultProps;

export default Radio;
