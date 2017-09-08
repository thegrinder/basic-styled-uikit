import styled from 'styled-components';
import { bool } from 'prop-types';
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

Radio.propTypes = {
  isValid: bool,
};

Radio.defaultProps = {
  isValid: true,
};

export default Radio;
