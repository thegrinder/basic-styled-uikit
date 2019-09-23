import { bool } from 'prop-types';
import styled, { css } from 'styled-components';
import {
  getInlineInputCommonStyle,
  getInlineInputStyle,
} from '../formSelectors';
import { rem } from '../../Typography';

const propTypes = {
  invalid: bool.isRequired,
  submitting: bool.isRequired,
};

const StyledInlineInput = styled.input`
  -webkit-appearance: none;
  box-sizing: border-box;
  max-width: 100%;
  width: 100%;
  border-width: 1px;
  border-style: solid;
  border-color: transparent;
  background-color: transparent;
  transition: 0.2s ease-in-out;
  transition-property: color, background-color, border;
  overflow: visible;

  vertical-align: middle;
  display: inline-block;
  border-radius: ${rem(6)};
  height: ${rem(40)};
  padding: 0 ${rem(10)};
  &:focus {
    outline: none;
  }
  &::placeholder {
    color: inherit;
  }
  ${({ theme, invalid, submitting }) => css`
    ${getInlineInputCommonStyle(theme)}
    ${getInlineInputStyle(theme, invalid, 'normal')}
    ${submitting && `padding-right : ${rem(36)};`}
    &:hover {
      ${getInlineInputStyle(theme, invalid, 'hover')}
    }
    &:focus {
      outline: none;
      ${getInlineInputStyle(theme, invalid, 'active')}
    }
    &:disabled {
      ${getInlineInputStyle(theme, invalid, 'disabled')}
    }
  `}
`;

StyledInlineInput.propTypes = propTypes;

export default StyledInlineInput;
