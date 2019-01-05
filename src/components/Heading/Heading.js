import React from 'react';
import { string, node } from 'prop-types';
import StyledHeading from './StyledHeading';

const propTypes = {
  sizing: string,
  color: string,
  as: node.isRequired,
};

const defaultProps = {
  color: 'gray900',
};

const Heading = ({
  sizing,
  color,
  as,
  ...rest
}) => (
  <StyledHeading
    as={as}
    sizing={sizing || as}
    color={color}
    {...rest}
  />
);

Heading.propTypes = propTypes;
Heading.defaultProps = defaultProps;

export default Heading;
