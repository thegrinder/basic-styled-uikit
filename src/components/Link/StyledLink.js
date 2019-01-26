import styled from 'styled-components';
import {
  string,
  oneOf,
  oneOfType,
  func,
} from 'prop-types';
import { textSizingStyle } from '../Text/textHelpers';
import { linkNormalStyle, linkHoverStyle, linkCommonStyle } from './linkHelpers';

const propTypes = {
  sizing: string.isRequired,
  linktype: string.isRequired,
  as: oneOfType([oneOf(['a', 'button']), func]).isRequired,
};

const StyledLink = styled.a`
  margin: 0;
  padding: 0;
  background-color: transparent;
  border: none;
  overflow: visible;
  box-sizing: border-box;
  display: inline-block;
  vertical-align: middle;
  outline: none;
  cursor: pointer;
  touch-action: manipulation;
  text-decoration: none;
  font-family: inherit;
  margin-bottom: 0;
  ${linkCommonStyle}
  ${textSizingStyle}
  ${linkNormalStyle}
  &:hover {
    ${linkHoverStyle}
    outline: none;
    text-decoration: underline;
  }
`;

StyledLink.propTypes = propTypes;

export default StyledLink;
