import styled from 'styled-components';
import radioCheckedIcon from './radio_checked_icon.svg';
import { miscInputReset } from '../commonFormStyles';

const Radio = styled.input.attrs({
  type: 'radio',
})`
  ${miscInputReset}
  border-radius: 50%;
  &:checked {
    background-image: url(${radioCheckedIcon});
  }
`;

export default Radio;
