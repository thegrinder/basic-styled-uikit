import React from 'react';
import styled from 'styled-components';
import { bool } from 'prop-types';
import { miscInputStyles } from '../commonFormStyles';

const propTypes = {
  invalid: bool,
};

const StyledRadio = styled.input.attrs({
  type: 'radio',
})`
  ${miscInputStyles}
  border-radius: 50%;
  position: relative;
  &:before {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
    background-color: #fff;
    width: 25%;
    height: 25%;
    border-radius: 50%;
  }
`;

StyledRadio.propTypes = propTypes;

const defaultProps = {
  invalid: false,
};

const Radio = props => <StyledRadio {...props} />;

Radio.propTypes = propTypes;
Radio.defaultProps = defaultProps;

export default Radio;
