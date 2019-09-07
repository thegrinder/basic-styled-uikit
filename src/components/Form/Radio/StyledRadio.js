import styled from 'styled-components';
import { bool } from 'prop-types';
import { miscInputStyles } from '../commonFormStyles';

const propTypes = {
  invalid: bool.isRequired,
};

const StyledRadio = styled.input.attrs({
  type: 'radio',
})`
  ${miscInputStyles}
  border-radius: 50%;
  position: relative;
  &:checked {
    &:before {
      content: '';
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      margin: auto;
      width: 0.5em;
      height: 0.5em;
      border-radius: 50%;
      background-color: #fff;
    }
  }
`;

StyledRadio.propTypes = propTypes;

export default StyledRadio;
