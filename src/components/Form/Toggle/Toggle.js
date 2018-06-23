import React from 'react';
import { number, bool } from 'prop-types';
import ToggleLabel from './ToggleLabel';
import ToggleCheckbox from './ToggleCheckbox';
import ToggleSlider from './ToggleSlider';

const propTypes = {
  h: number,
  disabled: bool,
};

const defaultProps = {
  h: 34,
  disabled: false,
};

function Toggle({ h, disabled }) {
  return (
    <ToggleLabel>
      <ToggleCheckbox h={h} disabled={disabled}/>
      <ToggleSlider h={h} disabled={disabled}/>
    </ToggleLabel>
  );
}

Toggle.propTypes = propTypes;
Toggle.defaultProps = defaultProps;

export default Toggle;
