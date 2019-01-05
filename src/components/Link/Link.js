import React from 'react';
import styled from 'styled-components';
import { string } from 'prop-types';
import { Link as ReactRouterLink } from 'react-router-dom';
import { linkNormalStyle, linkHoverStyle } from './linkHelpers';

const propTypes = {
  linkType: string,
};

const defaultProps = {
  linkType: 'default',
};

const RouterLink = styled(({ linkType, ...rest }) => <ReactRouterLink {...rest} />)`
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

RouterLink.propTypes = propTypes;
RouterLink.defaultProps = defaultProps;

export default RouterLink;
