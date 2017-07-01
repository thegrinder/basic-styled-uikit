import styled from 'styled-components';
import radioCheckedIcon from './radio_checked_icon.svg';
import { miscInputStyles } from '../commonFormStyles';

const Radio = styled.input.attrs({
  type: 'radio',
})`
  ${miscInputStyles}
  border-radius: 50%;
  &:checked {
    background-image: url(${radioCheckedIcon});
  }
`;

export default Radio;
