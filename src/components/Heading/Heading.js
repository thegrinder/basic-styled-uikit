import React from 'react';
import { string, node } from 'prop-types';
import StyledHeading from './StyledHeading';

const propTypes = {
  sizing: string,
  colour: string,
  as: node.isRequired,
};

const defaultProps = {
  colour: 'gray900',
};

const Heading = ({
  sizing,
  colour,
  as,
  ...rest
}) => (
  <StyledHeading
    as={as}
    sizing={sizing || as}
    colour={colour}
    {...rest}
  />
);

Heading.propTypes = propTypes;
Heading.defaultProps = defaultProps;

export default Heading;
