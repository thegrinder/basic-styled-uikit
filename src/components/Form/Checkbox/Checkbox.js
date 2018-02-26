import styled from 'styled-components';
import { bool } from 'prop-types';
import checkIcon from './check_icon.svg';
import { miscInputStyles } from '../commonFormStyles';

const Checkbox = styled.input.attrs({
  type: 'checkbox',
})`
  ${miscInputStyles}
  border-radius: 0;
  &:checked {
    background-image: url(${checkIcon});
  }
`;

Checkbox.propTypes = {
  invalid: bool,
};

export default Checkbox;
