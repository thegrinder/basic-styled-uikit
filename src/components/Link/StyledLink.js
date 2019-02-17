import styled, { css } from 'styled-components';
import { string } from 'prop-types';
import { getTextSizingStyle } from '../Text/textSelectors';
import { getLinkTypeStyle, getLinkCommonStyle } from './linkSelectors';

const propTypes = {
  sizing: string.isRequired,
  linktype: string.isRequired,
};

const StyledLink = styled.a`
  background-color: transparent;
  border: none;
  overflow: visible;
  display: inline-block;
  vertical-align: middle;
  outline: none;
  cursor: pointer;
  text-decoration: none;
  font-family: inherit;
  margin-bottom: 0;
  &:hover {
    outline: none;
    text-decoration: underline;
  }
  ${({ theme, sizing, linktype }) => css`
    ${getLinkCommonStyle(theme)}
    ${getTextSizingStyle(theme, sizing)}
    ${getLinkTypeStyle(theme, linktype, 'normal')}
    &:hover {
      ${getLinkTypeStyle(theme, linktype, 'hover')}
    }
  `}
`;

StyledLink.propTypes = propTypes;

export default StyledLink;
