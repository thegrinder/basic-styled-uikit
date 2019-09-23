import React from 'react';
import { string, oneOf, oneOfType, func } from 'prop-types';
import StyledLink from './StyledLink';

const propTypes = {
  /** sizings keys in the theme passed to <TypographyProvider /> */
  sizing: string,
  /** linkTypes keys in the theme passed to <LinkProvider /> */
  linkType: string,
  /** rendered html tag or custom router link component */
  as: oneOfType([oneOf(['a', 'button']), func]),
};

const Link = ({
  sizing = 'm',
  linkType: linktype = 'default',
  as = 'a',
  ...rest
}) => <StyledLink sizing={sizing} linktype={linktype} as={as} {...rest} />;

Link.propTypes = propTypes;

export default Link;
