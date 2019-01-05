import React from 'react';
import { number, bool, func } from 'prop-types';
import ToggleLabel from './ToggleLabel';
import ToggleCheckbox from './ToggleCheckbox';
import ToggleSlider from './ToggleSlider';

const propTypes = {
  h: number,
  disabled: bool,
  onChange: func.isRequired,
};

const defaultProps = {
  h: 34,
  disabled: false,
};

const Toggle = ({
  h,
  disabled,
  onChange,
  ...rest
}) => (
  <ToggleLabel>
    <ToggleCheckbox
      h={h}
      onChange={onChange}
      disabled={disabled}
      {...rest}
    />
    <ToggleSlider h={h} disabled={disabled}/>
  </ToggleLabel>
);

Toggle.propTypes = propTypes;
Toggle.defaultProps = defaultProps;

export default Toggle;
