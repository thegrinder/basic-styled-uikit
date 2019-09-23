import styled, { css } from 'styled-components';
import { number } from 'prop-types';
import { getToggleStyle } from '../formSelectors';
import { rem } from '../../Typography';

const propTypes = {
  h: number.isRequired,
};

const ToggleCheckbox = styled.input.attrs({
  type: 'checkbox',
})`
  position: absolute;
  width: 1px;
  height: 1px;
  margin: -1px;
  border: 0;
  clip: rect(0 0 0 0);
  overflow: hidden;
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
