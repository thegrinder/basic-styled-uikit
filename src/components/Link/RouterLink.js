import React from 'react';
import styled from 'styled-components';
import { oneOf } from 'prop-types';
import { Link as ReactRouterLink } from 'react-router-dom';
import { linkNormalStyle, linkHoverStyle } from './linkHelpers';

const propTypes = {
  linkType: oneOf(['default', 'muted']),
};

const defaultProps = {
  linkType: 'default',
};

const Link = styled(({ linkType, ...rest }) => <ReactRouterLink {...rest} />)`
  cursor: pointer;
  touch-action: manipulation;
  text-decoration: none;
  font-family: inherit;
  ${linkNormalStyle}
  &:hover {
    ${linkHoverStyle}
    outline: none;
    text-decoration: underline;
  }
`;

Link.propTypes = propTypes;
Link.defaultProps = defaultProps;

export default Link;
