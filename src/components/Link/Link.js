import React from 'react';
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
  /** one of: s, m, l */
  sizing: string,
  /** one of: default, muted */
  linktype: string,
  /** rendered html tag or custom router link component */
  as: oneOfType([oneOf(['a', 'button']), func]),
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

const defaultProps = {
  sizing: 'm',
  linktype: 'default',
  as: 'a',
};

const Link = ({
  sizing,
  linktype,
  as,
  ...rest
}) => (
    <StyledLink
      sizing={sizing}
      linktype={linktype}
      as={as}
      {...rest}
    />
);

Link.propTypes = propTypes;
Link.defaultProps = defaultProps;

export default Link;
