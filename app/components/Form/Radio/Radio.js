import styled from 'styled-components';
import radioCheckedIcon from './radio_checked_icon.svg';
import { miscNormalStyles, miscActiveStyles,
  miscDisabledStyles } from '../formHelpers';

const Radio = styled.input.attrs({
  type: 'radio',
})`
  display: inline-block;
  height: 16px;
  width: 16px;
  overflow: hidden;
  margin-top: -4px;
  vertical-align: middle;
  -webkit-appearance: none;
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
    outline: none;
  }
  &:disabled {
    ${miscDisabledStyles}
    cursor: default;
  }
  &:checked {
    ${miscActiveStyles}
    background-image: url(${radioCheckedIcon});
  }
`;

export default Radio;
