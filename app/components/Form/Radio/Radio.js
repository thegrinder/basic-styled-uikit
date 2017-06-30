import styled from 'styled-components';
import radioCheckedIcon from './radio_checked_icon.svg';
import { miscInputReset } from '../commonFormStyles';
import { miscNormalStyles, miscActiveStyles, miscCheckedStyles,
  miscDisabledStyles } from '../formHelpers';

const Radio = styled.input.attrs({
  type: 'radio',
})`
  ${miscInputReset}
  display: inline-block;
  height: 16px;
  width: 16px;
  margin-top: -4px;
  vertical-align: middle;
  background-repeat: no-repeat;
  background-position: 50% 50%;
  border-width: 1px;
  border-style: solid;
  transition: .2s ease-in-out;
  border-radius: 50%;
  transition-property: background-color, border;
  cursor: pointer;
  ${miscNormalStyles}
  &:focus {
    ${miscActiveStyles}
  }
  &:checked {
    ${miscCheckedStyles}
    background-image: url(${radioCheckedIcon});
  }
  &:disabled {
    ${miscDisabledStyles}
    cursor: default;
  }
`;

export default Radio;
