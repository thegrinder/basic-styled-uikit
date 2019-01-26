import React from 'react';
import {
  string,
  oneOf,
  oneOfType,
  func,
} from 'prop-types';
import StyledLink from './StyledLink';

const propTypes = {
  /** one of: s, m, l */
  sizing: string,
  /** one of: default, muted */
  linkType: string,
  /** rendered html tag or custom router link component */
  as: oneOfType([oneOf(['a', 'button']), func]),
};

const defaultProps = {
  sizing: 'm',
  linkType: 'default',
  as: 'a',
};

const Link = ({
  sizing,
  linkType: linktype,
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
