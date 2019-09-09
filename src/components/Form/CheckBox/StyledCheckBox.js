import styled from 'styled-components';
import { bool } from 'prop-types';
import { miscInputStyles } from '../commonFormStyles';

const propTypes = {
  invalid: bool.isRequired,
};

const StyledCheckBox = styled.input.attrs({
  type: 'checkbox',
})`
  ${miscInputStyles}
  border-radius: 0.25em;
  position: relative;
  &:checked {
    &:after {
      content: '';
      position: absolute;
      top: 25%;
      left: 0;
      right: 0;
      margin: auto;
      width: 50%;
      height: 25%;
      transform: rotate(-50deg);
      border-bottom: 0.125em solid #fff;
      border-left: 0.125em solid #fff;
    }
  }
`;

StyledCheckBox.propTypes = propTypes;

export default StyledCheckBox;
