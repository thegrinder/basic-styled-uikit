import React from 'react';
import { number, bool, func } from 'prop-types';
import styled from 'styled-components';
import ToggleCheckbox from './ToggleCheckbox';
import ToggleSlider from './ToggleSlider';

const ToggleLabel = styled.label`
  display: inline-block;
  width: 100%;
`;

const propTypes = {
  /** height of the Toggle */
  h: number,
  /** disabled flag */
  disabled: bool,
  /** onChange handler */
  onChange: func.isRequired,
};

const Toggle = ({ h = 34, disabled = false, onChange, ...rest }) => (
  <ToggleLabel>
    <ToggleCheckbox h={h} onChange={onChange} disabled={disabled} {...rest} />
    <ToggleSlider h={h} disabled={disabled} />
  </ToggleLabel>
);

Toggle.propTypes = propTypes;

export default Toggle;
