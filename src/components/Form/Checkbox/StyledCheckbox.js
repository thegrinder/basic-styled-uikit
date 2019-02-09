import styled from 'styled-components';
import { bool } from 'prop-types';
import { miscInputStyles } from '../commonFormStyles';
import { rem } from '../../../theme/typography';

const propTypes = {
  invalid: bool.isRequired,
};

const StyledCheckbox = styled.input.attrs({
  type: 'checkbox',
})`
  ${miscInputStyles}
  border-radius: ${rem(4)};
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

StyledCheckbox.propTypes = propTypes;

export default StyledCheckbox;
