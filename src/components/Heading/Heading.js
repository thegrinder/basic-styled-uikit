import React from 'react';
import { string, bool } from 'prop-types';
import StyledHeading from './StyledHeading';

const propTypes = {
  sizing: string,
  color: string,
  marginBottom: bool,
  as: string.isRequired,
};

const defaultProps = {
  color: 'default',
  marginBottom: false,
};

const Heading = ({
  sizing,
  color,
  marginBottom,
  as,
  ...rest
}) => (
  <StyledHeading
    as={as}
    sizing={sizing || as}
    marginBottom={marginBottom}
    color={color}
    {...rest}
  />
);

Heading.propTypes = propTypes;
Heading.defaultProps = defaultProps;

export default Heading;
