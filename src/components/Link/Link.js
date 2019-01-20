import React from 'react';
import styled from 'styled-components';
import { string } from 'prop-types';
import { textSizingStyle } from '../Text/textHelpers';
import { linkNormalStyle, linkHoverStyle } from './linkHelpers';

const propTypes = {
  /** one of: s, m, l */
  sizing: string,
  /** one of: default, muted */
  linktype: string,
};

const StyledLink = styled.a`
cursor: pointer;
touch-action: manipulation;
text-decoration: none;
font-family: inherit;
${textSizingStyle}
margin-bottom: 0;
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
};

const Link = props => <StyledLink {...props} />;

Link.propTypes = propTypes;
Link.defaultProps = defaultProps;

export default Link;
