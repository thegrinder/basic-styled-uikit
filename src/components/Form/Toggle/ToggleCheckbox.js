import styled, { css } from 'styled-components';
import { number } from 'prop-types';
import { getToggleStyle } from '../formSelectors';
import { rem } from '../../../helpers/utils';

const propTypes = {
  h: number.isRequired,
};

const ToggleCheckbox = styled.input.attrs({
  type: 'checkbox',
})`
  display: none;
  & + span:before {
    left: ${rem(4)};
  }
  ${({ theme, h }) => css`
    & + span {
      ${getToggleStyle(theme, 'normal')}
    }
    &:checked + span {
      ${getToggleStyle(theme, 'checked')}
    }
    &:checked + span:before {
      left: calc(100% - ${rem(h - 4)});
    }
  `}
`;

ToggleCheckbox.propTypes = propTypes;

export default ToggleCheckbox;
