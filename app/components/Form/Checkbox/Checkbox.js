import styled from 'styled-components';
import checkIcon from './check_icon.svg';
import { miscInputReset } from '../commonFormStyles';

const Checkbox = styled.input.attrs({
  type: 'checkbox',
})`
  ${miscInputReset}
  border-radius: 0;
  &:checked {
    background-image: url(${checkIcon});
  }
`;

export default Checkbox;
