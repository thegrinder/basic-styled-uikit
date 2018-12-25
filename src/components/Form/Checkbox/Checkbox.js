import styled from 'styled-components';
import { bool } from 'prop-types';
import { miscInputStyles } from '../commonFormStyles';

const propTypes = {
  invalid: bool,
};

const defaultProps = {
  invalid: false,
};

const Checkbox = styled.input.attrs({
  type: 'checkbox',
})`
  ${miscInputStyles}
  border-radius: 0;
  position: relative;
  &:after {
    content: '';
    position: absolute;
    border-bottom: 2px solid #fff;
    border-left: 2px solid #fff;
    top: 20%;
    left: 0;
    right: 0;
    margin: auto;
    width: 50%;
    height: 25%;
    transform: rotate(-50deg);
  }
`;

Checkbox.propTypes = propTypes;
Checkbox.defaultProps = defaultProps;

export default Checkbox;
