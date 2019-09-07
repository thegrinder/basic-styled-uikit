import styled from 'styled-components';
import { bool } from 'prop-types';
import { miscInputStyles } from '../commonFormStyles';
import { rem } from '../../../theme/typography';

const propTypes = {
  invalid: bool.isRequired,
};

const StyledRadio = styled.input.attrs({
  type: 'radio',
})`
  ${miscInputStyles}
  border-radius: 50%;
  position: relative;
  &:before {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
    width: ${rem(6)};
    height: ${rem(6)};
    border-radius: 50%;
  }
  &:checked {
    &:before {
      background-color: #fff;
    }
  }
`;

StyledRadio.propTypes = propTypes;

export default StyledRadio;
