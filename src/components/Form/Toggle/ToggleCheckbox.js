import styled from 'styled-components';
import { number } from 'prop-types';
import { toggleNormalStyle, toggleCheckedStyle } from '../formHelpers';
import { rem } from '../../../helpers/utils';

const ToggleCheckbox = styled.input.attrs({
  type: 'checkbox',
})`
  display: none;
  & + span {
    ${toggleNormalStyle}
  }
  &:checked + span {
    ${toggleCheckedStyle}
  }
  & + span:before {
    left: ${rem(4)};
  }
  &:checked + span:before {
    left: calc(100% - ${({ h }) => rem(h - 4)});
  }
`;

ToggleCheckbox.propTypes = {
  h: number.isRequired,
};

export default ToggleCheckbox;
